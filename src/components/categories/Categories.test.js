import React from "react";
import Categories from "./Categories";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import * as helpers from "../../utils/helpers";
import { MemoryRouter } from "react-router-dom";

describe("Test Categories component", () => {
  it("should render correctly", () => {
    const store = mockedStore();

    jest.spyOn(helpers, "findActiveCountryName").mockReturnValue("gb");

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
