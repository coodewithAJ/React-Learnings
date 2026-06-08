import { createBrowserRouter, Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default App;
