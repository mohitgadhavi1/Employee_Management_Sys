import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ErrorPage from "./ErrorPage";
import Department from "./routes/Department";
import EmployeeDetails from "./routes/EmployeeDetails";
import EmployeeList from "./routes/EmployeeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
   
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "departments",
    element: <Department />,
    errorElement: <ErrorPage />,
  },
  {
    path: "employees",
    element: <EmployeeList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/employees/:employeeId",
    element: <EmployeeDetails />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
