import { createBrowserRouter } from "react-router-dom";
import RegPage from "@/pages/RegPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegPage />,
  },
]);
