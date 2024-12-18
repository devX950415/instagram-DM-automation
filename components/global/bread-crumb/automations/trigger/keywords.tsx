import { useKeywords } from "@/hooks/use-automation";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { useQueryAutomations } from "@/hooks/user-queries";

type Props = {
  id: string;
};

function Keywords({ id }: Props) {
  const { deleteMutation, keywords, onKeyPress, onValueChange } =
    useKeywords(id);

  const { latestVariable } = useMutationDataState(["add-keywords"]);
  const { data } = useQueryAutomations(id);

  return <div className="">Keywords</div>;
}

export default Keywords;
