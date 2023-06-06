import { createBrowserRouter } from "react-router-dom";
import { mainUrls } from "./routingUrls/mainUrls";

const routes = () => {
  return createBrowserRouter([mainUrls]);
};

export default routes;
