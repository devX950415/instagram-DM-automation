import { Button } from "@/components/ui/button";
import { ActiveAutomation } from "@/icons/active-automation";
import { Loader2 } from "lucide-react";

type Props = {};

function ActiveAutomationButton({}: Props) {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      <Loader2 className="animate-spin" />
      <ActiveAutomation />
      <p className="lg:inline hidden">Activate</p>
    </Button>
  );
}

export default ActiveAutomationButton;
