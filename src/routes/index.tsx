import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home.screen";
import CheckoutScreen from "../pages/checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/checkout",
    element: <CheckoutScreen />,
  },
]);
