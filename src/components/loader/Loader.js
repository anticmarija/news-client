import React from "react";
import * as loaderGif from "../../assets/loader.gif";
import { LoaderWrapperStyle } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderWrapperStyle>
      <img alt="loader" src={loaderGif} />
    </LoaderWrapperStyle>
  );
};

export default Loader;
