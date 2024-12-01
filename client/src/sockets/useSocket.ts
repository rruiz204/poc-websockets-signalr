import { useState, useRef } from "react";
import { HubConnection, HubConnectionBuilder, HttpTransportType } from "@microsoft/signalr";

/* const URL = "http://localhost:5256/testing-ws"; */

/* interface State {}; */

interface Actions {
  connect: (url: string) => Promise<void>;
  disconnect: () => Promise<void>;
  listen: <T = undefined>(event: string, callback: (model?: T) => void) => void;
  send: <T = undefined>(event: string, inputs?: T) => Promise<void>;
};

const useSocket = (): Actions => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const socket = useRef<HubConnection | null>(null);

  const connect = async (URL: string) => {
    if (socket.current) return;

    socket.current = new HubConnectionBuilder().withUrl(URL, {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets
    }).build();

    await socket.current.start();
    setIsConnected(true);
  };

  const disconnect = async () => {
    if (isConnected) {
      socket.current?.stop();
      setIsConnected(false)
    };
  };

  const listen = <T = undefined>(event: string, callback: (model?: T) => void) => {
    socket.current?.on(event, callback);
  };

  const send = async <T = undefined>(event: string, inputs?: T) => {
    if (isConnected) await socket.current?.invoke(event, inputs);
  };

  return Object.freeze({ connect, disconnect, listen, send });
};

export default useSocket;