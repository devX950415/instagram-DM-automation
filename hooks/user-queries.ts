import { getAllAutomation, getAutomationInfo } from "@/actions/automation";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomation = () => {
  return useQuery({
    queryKey: ["user-automation"],
    queryFn: getAllAutomation,
  });
};

export const useQueryAutomations = (id: string) => {
  return useQuery({
    queryKey: ["automation-info"],
    queryFn: () => getAutomationInfo(id),
  });
};
