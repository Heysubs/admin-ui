/* eslint-disable react/prop-types */
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPassword from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensePage from "./pages/expense";
import GoalPage from "./pages/goal";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const {isLoggedIn} = useContext(AuthContext);

  const RequiredAuth = ({children}) => {
    return isLoggedIn ? children : <Navigate to="/login"/>;
  };


  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequiredAuth> <DashboardPage/> </RequiredAuth>,
      errorElement: <ErrorRoute/>,
    },
    {
      path: "/eror",
      element: <ErrorRoute/>,
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    {
      path: "/register",
      element: <SignUpPage/>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>,
    },
    {
      path: "/balance",
      element: <RequiredAuth> <BalancePage/> </RequiredAuth>,
    },
    {
      path: "/expense",
      element: <RequiredAuth> <ExpensePage/> </RequiredAuth> ,
    },
    {
      path: "/goal",
      element: <RequiredAuth> <GoalPage/> </RequiredAuth> ,
    }

  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;