import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, Component: HomePage }],
  },
]);

export default routes;
