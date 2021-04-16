import socketIOClient from "socket.io-client";
import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { AppAction } from "redux/actions/actionTypes";
import * as externalActions from "redux/actions/externalActions";

// This is an example of how you might use Socket.IO to communicate with outside world and exchange data with the app using Redux

class Communicator {
  store: MiddlewareAPI;
  socket: SocketIOClient.Socket;

  constructor(store: MiddlewareAPI) {
    console.log("Initializing communicator");
    this.store = store;
    this.socket = this.initSocket();
  }

  initSocket(): SocketIOClient.Socket {
    this.socket = socketIOClient("http://localhost:8080");

    this.socket.on("connect", () => {
      this.store.dispatch(externalActions.serverConnected());
    });

    this.socket.on("disconnect", () => {
      this.store.dispatch(externalActions.serverDisconnected());
    });

    this.socket.on("MSG", (type: string, data: any) => {
      if (type === "SENSORS") {
        this.store.dispatch(externalActions.messageReceived(data));
      }
      // alert("Message Received!"); // This is also a good place to show alerts
    });

    return this.socket;
  }

  reduxMiddleware(next: Dispatch) {
    return (action: AppAction) => {
      if (action.type === "TRANSMIT") {
        if (action.payload.data != null) {
          this.socket.emit(action.payload.msg, action.payload.data);
        } else {
          this.socket.emit(action.payload.msg);
        }
        console.log("Transmitting", action.payload);
      }
      next(action);
    };
  }
}

export default ((store: MiddlewareAPI) => {
  const communicator = new Communicator(store);
  return (next: Dispatch) => communicator.reduxMiddleware(next);
}) as Middleware;
