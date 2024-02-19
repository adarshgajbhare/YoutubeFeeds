import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";
import SearchResult from "./SearchResult";

const Routings = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Feed",
      element: <Feed />,
    },
    {
      path: "/search",
      element: <SearchResult />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRoute}> </RouterProvider>
    </>
  );
};

export default Routings;
