import React, { Fragment } from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { HomeContent } from "../content/Contents";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Nav />
        <HomeContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
