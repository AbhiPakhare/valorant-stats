import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFound from "./Views/NotFound.jsx";
import { Home, homeLoader } from "./Views/Home.jsx";
import { AgentView, agentLoader } from "./Views/AgentView.jsx";
import "./assets/fonts/Tungsten-Bold.ttf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/agents/:uuid/:displayName",
        element: <AgentView />,
        loader: agentLoader,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
