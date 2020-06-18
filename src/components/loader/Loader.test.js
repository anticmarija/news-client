import React from "react";
import Loader from "./Loader";
import { render } from "@testing-library/react";

describe("Test Loader component", () => {
  it("should render correctly", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
