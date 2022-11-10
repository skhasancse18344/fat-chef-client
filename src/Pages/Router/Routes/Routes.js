import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Items from "../../Home/Services/Items";
// import AllServices from "../../Home/Services/Items";

import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import AddServices from "../../AddServices/AddServices";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import AddReview from "../../Reviews/AddReview";
import MyReviews from "../../Reviews/MyReviews";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";
import Blog from "../../Blog/Blog";
import UpdateReview from "../../Reviews/UpdateReview";
import ErrorPage from "../../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/items",
        element: <Items></Items>,
      },
      {
        path: "/items/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-skhasancse18344.vercel.app/items/${params?.id}`
          ),
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
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview/:id",
        element: <AddReview></AddReview>,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-skhasancse18344.vercel.app/addReview/${params?.id}`
          ),
      },
      {
        path: "/UpdateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-skhasancse18344.vercel.app/UpdateReview/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
