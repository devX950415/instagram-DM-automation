import { getAllAutomation } from "@/actions/automation";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomation = () => {
  return useQuery({
    queryKey: ["user-automation"],
    queryFn: getAllAutomation,
  });
};
