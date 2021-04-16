export const exampleAction = (payload: string) => ({
  type: "EXAMPLE_ACTION" as const,
  payload: payload,
});

// "TRANSMIT" actions are caught by the communicator middleware to send a message to the outside world
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transmitAction = (msg: string, data: any) => ({
  type: "TRANSMIT" as const,
  payload: {
    msg: msg,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: data,
  },
});
