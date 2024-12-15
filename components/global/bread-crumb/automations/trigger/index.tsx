"use client";

import { Separator } from "@/components/ui/separator";
import { useQueryAutomations } from "@/hooks/user-queries";
import ThenActions from "../then-actions";
import ActiveTrigger from "./active";

type Props = {
  id: string;
};

function Trigger({ id }: Props) {
  /*  const { data } = useQueryAutomations(id); */

  const data = {
    data: {
      trigger: [
        {
          type: "COMMENTS",
        },
      ],
      keywords: [
        { id: "1", word: "hello", automationId: "M001" },
        { id: "2", word: "welcome", automationId: null },
        { id: "3", word: "thank you", automationId: "M003" },
      ],
      listener: null,
    },
  };

  if (data?.data && data?.data?.trigger?.length > 0) {
    return (
      <div className="flex flex-col gap-y-6 items-center">
        <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keywords}
        />
        {/* // TODO: */}
        {/* {data.data.trigger.length > 1 && <></>} */}
        <>
          <div className="relative w-6/12">
            <p className="absolute transform bg-background-90 px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
              or
            </p>
            <Separator
              orientation="horizontal"
              className="border-muted border-[1px]"
            />
          </div>
          <ActiveTrigger
            type={data.data.trigger[0].type}
            keywords={data.data.keywords}
          />
        </>
        {!data.data.listener && <ThenActions id={id} />}
      </div>
    );
  }
}

export default Trigger;
