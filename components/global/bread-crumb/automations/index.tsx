import { ChevronRight, PencilIcon } from "lucide-react";
import ActiveAutomationButton from "../../active-automation-button";

type Props = {
  id: string;
};

function AutomationBreadCrumb({ id }: Props) {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0] truncate">Automation</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          <p className="text-[#9B9CA0]">This is Automation Tittle</p>
          <span
            className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
            // onClick={enableEdit}
          >
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5 ml-auto">
        <p className="text-text-secondary/60 text-sm">
          All pages are automatically Saved
        </p>
        <div className="flex gap-x-5">
          <p className="text-text-secondary text-sm">Changes Saved</p>
          <p className="text-text-secondary text-sm">Undo | Redo</p>
        </div>
      </div>
      <ActiveAutomationButton />
    </div>
  );
}

export default AutomationBreadCrumb;
