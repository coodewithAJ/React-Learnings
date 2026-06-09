import { useRef, useState } from "react";
import AuthHOC from "./components/AuthHOC";
import DashBoard from "./components/DashBoard";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";
import UserContext from "./context/UserContext";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    name: "Ashok",
    id: 5500,
  });

  return (
    <>
      <Header />

      <h1>This is home page</h1>

      <UserContext.Provider value={user}>
        <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;
