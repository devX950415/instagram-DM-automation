import {
  AutomationDuoToneWhite,
  HomeDuoToneWhite,
  RocketDuoToneWhite,
  SettingsDuoToneWhite,
} from "@/icons";
import { v4 as uuid } from "uuid";

type Props = {
  label: string;
  id: string;
};

type SIDEBAR_MENU_TYPE = {
  icon: React.ReactNode;
} & Props;

export const SIDEBAR_MENU: SIDEBAR_MENU_TYPE[] = [
  {
    id: uuid(),
    label: "Home",
    icon: <HomeDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "Automation",
    icon: <AutomationDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "Integrations",
    icon: <RocketDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "Settings",
    icon: <SettingsDuoToneWhite />,
  },
];
