import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Layout from "../Layout/Layout";
import Dashboard from "../Dashboard/Dashboard";
import Body from "../Body";
// import SignUp from "../SignUp/index"
import SignUp from "../SignUp";
import Login from "../Login";

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

    {
      path: NAVIGATION_ROUTES.SIGNUP,
      element: (
         <SignUp/>
      )
  },

  
  {
    path: NAVIGATION_ROUTES.LOGIN,
    element: (
       <Login/>
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
