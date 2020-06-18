import { storiesOf } from "@storybook/react";
import React from "react";
import Loader from "../components/loader/Loader";

storiesOf("Loader", module).add("Example of a loader", () => <Loader />, {
  notes: "This is sample of Loader component.",
});
