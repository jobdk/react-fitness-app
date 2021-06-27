import React from "react";
import Menu from "../Menu/Menu";
import Header from "./Header/Header";
import "../Layout/Layout.css";

const Layout = (props) => {
  return (
    <div>
      <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Header />
      <main id="page-wrap">{props.children}</main>
    </div>
  );
};

export default Layout;
