import React from "react";
import Categories from "./Categories";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));

describe("Test Categories component", () => {
  it("should render correctly", () => {
    const store = mockedStore();

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
