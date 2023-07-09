import { createBrowserRouter } from "react-router-dom";
import RegPage from "@/pages/RegPage";
import ActivatePage from "@/pages/ActivatePage";
import PostPage from "@/pages/PostPage";
import PostsPage from "@/pages/PostsPage";


export const router = createBrowserRouter([
  {
    path: "/",
    // lazy: () => import("../pages/RegPage"),
    element: <RegPage />,
  },
  {
    path: "/activate",
    // lazy: () => import("../pages/ActivatePage"),
    element: <ActivatePage />,
  },
  {
    path: "/posts",
    // lazy: () => import("../pages/PostsPage"),
    element: <PostsPage />,
  },
  {
    path: "/post/:id",
    // lazy: () => import("../pages/PostPage"),
    element: <PostPage />,
  },
]);
