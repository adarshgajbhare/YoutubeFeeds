import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";

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
  ]);

  return (
    <>
      <RouterProvider router={appRoute}> </RouterProvider>
    </>
  );
};

export default Routings;
