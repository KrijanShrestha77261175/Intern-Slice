import React, { useEffect } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Body from "../Body";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import TableUser from "../Pages/Tables/Users";
import TablePosts from "../Pages/Tables/Posts";
const AppRoutes = () => {
  const navigate = useNavigate();

  // Check if the user has a valid token
  const hasValidToken = () => {
    const token = localStorage.getItem("AccessToken");

    // Return true if token exists otherwise false
    return !!token;
  };

  const routes = [
    {
      path: NAVIGATION_ROUTES.DASHBOARD,
      element: hasValidToken() ? (
        <Layout>
          <Dashboard />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} replace />
      ),
    },

    {
      path: NAVIGATION_ROUTES.PROFILE,
      element: hasValidToken() ? (
        <Layout>
          <Body />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} replace />
      ),
    },

    {
      path: NAVIGATION_ROUTES.SIGNUP,
      element: hasValidToken() ? (
        <Navigate to={NAVIGATION_ROUTES.DASHBOARD} />
      ) : (
        <SignUp />
      ),
    },

    {
      path: NAVIGATION_ROUTES.LOGIN,
      element: hasValidToken() ? (
        <Navigate to={NAVIGATION_ROUTES.DASHBOARD} />
      ) : (
        <Login />
      ),
    },

    {
      path: NAVIGATION_ROUTES.USERS,
      element: hasValidToken() ? (
        <Layout>
          <TableUser />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} replace />
      ),
    },

    {
      path: NAVIGATION_ROUTES.POSTS,
      element: hasValidToken() ? (
        <Layout>
          <TablePosts />
        </Layout>
      ) : (
        <Navigate to={NAVIGATION_ROUTES.LOGIN} replace />
      ),
    },
  ];

  const route = useRoutes(routes);

  //   useEffect(() => {
  //     navigate(NAVIGATION_ROUTES.PROFILE);
  //   }, []);

  return route;
};

export default AppRoutes;
