import React, { Fragment } from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { ButtonContent } from "../content/Contents";

const Button = () => {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Nav />
        <ButtonContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Button;
