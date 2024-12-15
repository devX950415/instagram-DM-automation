import { useListener } from "@/hooks/use-automation";
import React from "react";
import TriggerButton from "./trigger-button";
import { AUTOMATION_LISTENERS } from "@/constants/automation";
import SubscriptionPlan from "../../subscription-plan";

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

  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_LISTENERS.map((listener) =>
          listener.type === "SMARTAI" ? (
            <SubscriptionPlan key={listener.id} type="PRO">
              <div
                onClick={() => onSetListener(listener.type)}
                key={listener.id}
              ></div>
            </SubscriptionPlan>
          ) : (
            ""
          )
        )}
      </div>
    </TriggerButton>
  );
}

export default ThenActions;

// 6.17
