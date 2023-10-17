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
        loader: () => fetch("http://localhost:5000/coffee"),
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
        loader: () => fetch("http://localhost:5000/user"),
      },
    ],
  },

  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);
export default router;
