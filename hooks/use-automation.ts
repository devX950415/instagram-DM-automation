import { createAutomations } from "@/actions/automation";
import { useMutationData } from "./use-mutation-data";

export const useCreateAutomation = () => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"],
    () => createAutomations(),
    "user-automation"
  );

  return { isPending, mutate };
};
