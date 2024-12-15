import { useListener } from "@/hooks/use-automation";
import React from "react";
import TriggerButton from "./trigger-button";

type Props = {
  id: string;
};

function ThenActions({ id }: Props) {
  const {
    onSetListener,
    onFormSubmit,
    register,
    isPending,
    listener: Listener,
  } = useListener(id);

  return <TriggerButton label="Then">""</TriggerButton>;
}

export default ThenActions;
