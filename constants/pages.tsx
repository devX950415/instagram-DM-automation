import {
  AutomationDuoToneBlue,
  ContactsDuoToneBlue,
  HomeDuoToneBlue,
  RocketDuoToneBlue,
  SettingsDuoToneWhite,
} from "@/icons";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automation",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICONS: Props = {
  AUTOMATION: <AutomationDuoToneBlue />,
  CONTACTS: <ContactsDuoToneBlue />,
  INTEGRATIONS: <RocketDuoToneBlue />,
  SETTINGS: <SettingsDuoToneWhite />,
  HOME: <HomeDuoToneBlue />,
};
