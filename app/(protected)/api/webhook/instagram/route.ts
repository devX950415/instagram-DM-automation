import {
  createChatHistory,
  getKeywordAutomation,
  matchKeyword,
  trackResponse,
} from "@/actions/webhook/queries";
import { sendDm } from "@/lib/fetch";
import { openai } from "@/lib/openai";
import { client } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const hub = req.nextUrl.searchParams.get("hub.challenge");
  return new NextResponse(hub);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  let matcher;

  try {
    if (body.entry[0].messaging) {
      matcher = await matchKeyword(body.entry[0].messaging[0].message.text);
    }

    if (body.entry[0].changes) {
      matcher = await matchKeyword(body.entry[0].changes[0].value.text);
    }

    if (matcher && matcher.automationId) {
      // keyword matcher

      if (body.entry[0].messaging) {
        const automation = await getKeywordAutomation(
          matcher.automationId,
          true
        );

        if (automation && automation.trigger) {
          if (
            automation.listener &&
            automation.listener?.listener === "MESSAGE"
          ) {
            const direct_message = await sendDm(
              body.entry[0].id,
              body.entry[0].messaging[0].sender.id,
              automation.listener?.prompt,
              automation.User?.integrations[0].token!
            );

            if (direct_message.status === 200) {
              const tracked = await trackResponse(automation.id, "DM");
              if (tracked) {
                return NextResponse.json(
                  {
                    message: "Message sent successfully",
                  },
                  {
                    status: 200,
                  }
                );
              }
            }
          }
          if (
            automation.listener &&
            automation.listener?.listener === "SMARTAI" &&
            automation.User?.subscription?.plan === "PRO"
          ) {
            const smart_ai_message = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "assistant",
                  content: `${automation.listener.prompt}: Keep responses under 2 sentences.`,
                },
              ],
            });

            if (smart_ai_message.choices[0].message.content) {
              const receiver = createChatHistory(
                automation.id,
                body.entry[0].id,
                body.entry[0].messaging[0].sender.id,
                body.entry[0].messaging[0].message.text
              );

              const sender = createChatHistory(
                automation.id,
                body.entry[0].id,
                body.entry[0].messaging[0].sender.id,
                smart_ai_message.choices[0].message.content
              );

              await client.$transaction([receiver, sender]);

              const direct_message = await sendDm(
                body.entry[0].id,
                body.entry[0].messaging[0].sender.id,
                smart_ai_message.choices[0].message.content,
                automation.User?.integrations[0].token!
              );

              if (direct_message.status === 200) {
                const tracked = await trackResponse(automation.id, "DM");

                if (tracked) {
                  return NextResponse.json(
                    {
                      message: "Message sent successfully",
                    },
                    { status: 200 }
                  );
                }
              }
            }
          }
        }
      }

      // trigger matcher 8.46
    }
  } catch (error) {}
}
