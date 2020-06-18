import React from "react";
import Menu from "./Menu";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Test Menu component", () => {
  it("should render correctly", () => {
    const store = mockedStore();

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
