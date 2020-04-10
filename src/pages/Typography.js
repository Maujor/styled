import React, { Fragment } from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { TypographyContent } from "../content/Contents";

const Typography = () => {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Nav />
        <TypographyContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Typography;
