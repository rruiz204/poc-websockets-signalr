import { useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

const URL = "http://localhost:5256/testing-ws";

const Testing = (): JSX.Element => {

  useEffect(() => {
    const socket = new HubConnectionBuilder().withUrl(URL, { withCredentials: true }).build();

    const connect = async () => {
      try {
        await socket.start();
        console.log("socket connnected");
      } catch (err) {
        console.log("socket error:", err);
      }
    };

    connect();

    return () => {
      socket.stop();
      console.log("socket disconnected");
    };
  }, []);

  return (
    <div>
      <p className="text-3xl">Testing Page</p>
    </div>
  );
};

export default Testing;