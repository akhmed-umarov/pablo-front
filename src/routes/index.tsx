import { createBrowserRouter } from "react-router-dom";
import RegPage from "@/pages/RegPage";
import ActivatePage from "@/pages/ActivatePage";
import PostPage from "@/pages/PostPage";
import PostsPage from "@/pages/PostsPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegPage />,
  },
  {
    path: "/activate",
    element: <ActivatePage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
]);
