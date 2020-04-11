import React, { Fragment } from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { CodeContent } from "../content/Contents";

const Code = () => {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Nav />
        <CodeContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Code;
