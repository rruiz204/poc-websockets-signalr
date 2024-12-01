import { useEffect, useState } from "react";
import useSocket from "../../sockets/useSocket";

const Interval = (): JSX.Element => {
  const [message, setMessage] = useState<string | undefined>();
  const { connect, disconnect, listen, send } = useSocket();

  listen<string>("ReceiveHelloWorld", (message) => {
    console.log(message);
    setMessage(message);
  });
  
  useEffect(() => {
    connect("http://localhost:5256/testing-ws")

    setInterval(() => {
      console.log("this is an interval");
    }, 5000);
    
    return () => {disconnect()};
  }, []);

  const handle = async () => await send<string>("SendHelloWorld", "User 1");

  return (
    <div>
      <p className="text-3xl">Interval Page</p>
      <p>Message: {message}</p>
      <button onClick={handle}
        className="border-2 p-2 m-2 rounded-md font-semibold hover:bg-slate-200 duration-200">
        Send Hello World
      </button>
    </div>
  );
};

export default Interval;