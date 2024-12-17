import { useKeywords } from "@/hooks/use-automation";
import React from "react";

type Props = {
  id: string;
};

function Keywords({ id }: Props) {
  const { deleteMutation, keywords, onKeyPress, onValueChange } =
    useKeywords(id);

  return <div className="">Keywords</div>;
}

export default Keywords;

//04.46
