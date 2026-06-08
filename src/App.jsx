import { useRef } from "react";
import AuthHOC from "./components/AuthHOC";
import DashBoard from "./components/DashBoard";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

function App() {
  const nameRef = useRef("initialValue");
  const handleSubmit = () => {
    console.log(nameRef.current.value);
  };

  return (
    <>
      <h1>Learning React</h1>
      <DashBoard />
      <input
        type="text"
        ref={nameRef}
      />
      <button onClick={handleSubmit}>submit</button>
      <StopWatch />
      <Timer />
    </>
  );
}

export default App;
