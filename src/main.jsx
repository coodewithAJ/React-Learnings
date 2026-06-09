import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// main.jsx
import "./index.css";
import App from "./App.jsx";
import DashBoard from "./components/DashBoard.jsx";
import { createBrowserRouter } from "react-router-dom";
import StopWatch from "./components/StopWatch.jsx";
import { RouterProvider } from "react-router";
import Timer from "./components/Timer.jsx";
import AdminPage from "./components/AdminPage.jsx";
import Protected from "./components/Protected.jsx";
import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";
import UseMemo from "./components/UseMemo.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/stopwatch",
        Component: StopWatch,
      },
      {
        path: "/timer",
        Component: Timer,
      },
      {
        path: "/counter",
        Component: Counter,
      },
        {
        path: "/form",
        Component: Form,
      },
       {
        path: "/usememo",
        Component: UseMemo,
      },
      {
        path: "/admin/:name",
        element: (
          <Protected isAuthenticated={true}>
            <AdminPage />
          </Protected>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
