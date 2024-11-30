import { useEffect, useRef, useState } from "react";
import { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

const URL = "http://localhost:5256/testing-ws";

const Testing = (): JSX.Element => {
  const socket = useRef<HubConnection | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const [payload, setPayload] = useState<string | null>(null);

  useEffect(() => {
    const connect = async () => {
      if (socket.current) {
        console.log("there is a socket ready");
        return;
      }

      socket.current = new HubConnectionBuilder().withUrl(URL, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      }).build();

      socket.current.on("ReceiveHelloWorld", (payload: string) => {
        console.log(payload);
        setPayload(payload);
      });

      try {
        await socket.current?.start();
        setIsConnected(true);
        console.log("Connecting...");
      } catch (err) {
        console.log("there is an error", err);
      }
    };

    connect();

    return () => {
      if (isConnected) {
        console.log("Disconnecting...");
        socket.current?.stop();
      };
    };
  }, []);


  const sendHelloWorld = async () => {
    try {
      if (isConnected) await socket.current?.invoke("SendHelloWorld");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className="text-3xl">Testing Page</p>
      {
        payload && <p>Payload: {payload}</p>
      }
      <button onClick={sendHelloWorld}
        className="border-2 p-2 m-2 rounded-md font-semibold hover:bg-slate-200 duration-200">
        Send Hello World
      </button>
    </div>
  );
};

export default Testing;