export const setCurrentWord = (payload: string) => ({
  type: "SET_CURRENT_WORD" as const,
  payload: payload,
});

export const pushCurrentWord = () => ({
  type: "PUSH_CURRENT_WORD" as const,
});

export const popLastWord = () => ({
  type: "POP_LAST_WORD" as const,
});
