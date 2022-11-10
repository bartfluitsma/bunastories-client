import React from "react";
import Footer from "./navigation/Footer";
import Navbar from "./navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
