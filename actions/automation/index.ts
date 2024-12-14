"use server";

import { onCurrentUser } from "../user";
import { createAutomation } from "./queries";

export const getAllAutomation = async () => {
  const user = await onCurrentUser();

  try {
    const create = await createAutomation(user.id);

    if (create) return { status: 200, data: "Automation created" };
    return { status: 404, data: "Failed to create automation" };
  } catch (error: any) {
    return { status: 500, data: error.message };
  }
};
