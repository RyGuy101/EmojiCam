export const exampleAction = (payload: string) => ({
  type: "EXAMPLE_ACTION" as const,
  payload: payload,
});
