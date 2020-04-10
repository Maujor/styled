import React, { Fragment } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import Header from "./Header";
import Nav from "./Nav";

const Layout = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Nav />
  </Fragment>
);

export default Layout;
