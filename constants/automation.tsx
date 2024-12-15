import { PlaneBlue, SmartAi } from "@/icons";
import { v4 } from "uuid";

export type AutomationTypeProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "SMARTAI" | "MESSAGE";
};

export const AUTOMATION_LISTENERS: AutomationTypeProps[] = [
  {
    id: v4(),
    label: "Send the user a message",
    icon: <PlaneBlue />,
    description: "Enter the message that you want to send the user.",
    type: "MESSAGE",
  },
  {
    id: v4(),
    label: "Let Smart AI take over",
    icon: <SmartAi />,
    description: "Tell AI about your project. (Upgrade to use this feature)",
    type: "SMARTAI",
  },
];
