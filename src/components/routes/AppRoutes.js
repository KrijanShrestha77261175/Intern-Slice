import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Layout from "../Layout/Layout";
import Dashboard from "../Dashboard/Dashboard";
import Body from "../Body";

const AppRoutes = () => {
  const navigate = useNavigate();

  const routes = [
    {
        path: NAVIGATION_ROUTES.DASHBOARD,
        element: (
            <Layout>
          <Dashboard />
        </Layout>
        )
    },

    {
        path: NAVIGATION_ROUTES.PROFILE,
        element: (
            <Layout>
          <Body />
        </Layout>
        )
    },
  ];

  const route = useRoutes(routes);

//   useEffect(() => {
//     navigate(NAVIGATION_ROUTES.PROFILE);
//   }, []);

  return route;
};

export default AppRoutes;
