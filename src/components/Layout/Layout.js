import React from "react";
import Menu from "../Menu/Menu";
import Header from "./Header/Header";
import "../Layout/Layout.css";
import Media from "react-media";

const Layout = (props) => {
  return (
    <div>
      <Media query="(max-width: 1000px)">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </Media>

      <Header />
      <main id="page-wrap">{props.children}</main>
    </div>
  );
};

export default Layout;
