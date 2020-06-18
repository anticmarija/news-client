import React from "react";
import Article from "./Article";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

describe("Test Article component", () => {
  it("should render correctly without video", () => {
    const store = mockedStore();
    const { container } = render(
      <Provider store={store}>
        <Article />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
