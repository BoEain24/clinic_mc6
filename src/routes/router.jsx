import { createBrowserRouter } from "react-router-dom";
import Layout from "../features/public/components/Layout";
import publicRoute from "./publicRoute";
import NotFoundPage from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [...publicRoute],
  },
]);

export default router;
