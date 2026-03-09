import { createBrowserRouter } from "react-router";
import AppRouter from "./app";
import AdminRouter from "./admin";
import UserRouter from "./user";

const router = createBrowserRouter([
  ...AppRouter(),
  ...AdminRouter(),
  ...UserRouter(),
]);

export default router;