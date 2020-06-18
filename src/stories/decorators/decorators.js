/* eslint-disable */

import React from "react";
import { Provider } from "react-redux";
import store from "../../store";

export default function StorybookProvider({ story }) {
  return <Provider store={store}>{story}</Provider>;
}
