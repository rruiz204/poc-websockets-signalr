import { useEffect } from "react";

const Interval = (): JSX.Element => {
  
  useEffect(() => {
    setInterval(() => {
      console.log("this is an interval");
    }, 5000);
  }, []);

  return (
    <div>
      <p className="text-3xl">Interval Page</p>
    </div>
  );
};

export default Interval;