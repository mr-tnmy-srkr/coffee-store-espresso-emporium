import { createBrowserRouter } from "react-router-dom";
import UpdateCoffee from "../components/UpdateCoffee";
import AddCoffee from "../components/AddCoffee";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Root from "../components/Root";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://coffee-store-espresso-emporium-server-neon.vercel.app/coffee"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://coffee-store-espresso-emporium-server-neon.vercel.app/user"
          ),
      },
    ],
  },

  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-espresso-emporium-server-neon.vercel.app/coffee/${params.id}`
      ),
  },
]);
export default router;
