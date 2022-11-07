import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Items from "../../Home/Services/Items";
// import AllServices from "../../Home/Services/Items";

import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/items",
        element: <Items></Items>,
        loader: () => fetch("http://localhost:5000/items"),
      },
    ],
  },
]);

export default router;
