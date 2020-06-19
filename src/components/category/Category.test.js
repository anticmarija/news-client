import React from "react";
import Category from "./Category";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));

describe("Test Category component", () => {
  it("should render correctly", () => {
    const store = mockedStore();

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Category />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
