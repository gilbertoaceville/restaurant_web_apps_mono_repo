import React from "react";
import { Layout } from "./authLayout.styles";

const AuthLayout = ({children}) => {
  return (
    <Layout>
        {children}
    </Layout>
  );
};

export default AuthLayout;
