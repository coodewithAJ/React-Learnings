import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  useEffect(() => {
    if (!start) return;
    let interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setTimer(0);
    setStart(false);
  };

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
