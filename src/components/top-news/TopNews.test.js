import React from "react";
import TopNews from "./TopNews";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const store = mockedStore();

describe("Test TopNews component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <TopNews />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
