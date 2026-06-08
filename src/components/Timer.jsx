import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const inputRef = useRef("");
  const handleStart = () => {
    if (!inputRef.current.value.trim()) {
      alert("please enter a valid countdown time");
      return;
    }
    if (isRunning) return;
    setIsRunning(true);
    setTime(+inputRef.current.value.trim());
    inputRef.current.value = "";
  };
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev >= 1) {
          return prev - 1;
        } else {
          setIsRunning(false);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleReset = () => {
    setTime("");
    setIsRunning(false);
  };
  return (
    <div>
      <input
        type="number"
        ref={inputRef}
        placeholder="please enter time in seconds"
      />
      <h1>{time == 0 && !isRunning ? "Time up" : time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;

