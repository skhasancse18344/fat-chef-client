import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Items from "../../Home/Services/Items";
// import AllServices from "../../Home/Services/Items";

import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import AddServices from "../../AddServices/AddServices";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";

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
      },
      {
        path: "/items/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params?.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addServices",
        element: <AddServices></AddServices>,
      },
    ],
  },
]);

export default router;
