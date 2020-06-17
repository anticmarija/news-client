import React from "react";
import { LayoutStyle } from "./Layout.style";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
