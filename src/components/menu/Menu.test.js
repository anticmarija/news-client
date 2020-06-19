import React from "react";
import Menu from "./Menu";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as actions from "../../store/actions/countries.actions";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));

const store = mockedStore();

describe("Test Menu component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should handleChangeCountry() correctly", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      </Provider>
    );

    const countryLink = queryByTestId("country-link");

    const actionSpy = jest.spyOn(actions, "setActiveCountry");

    fireEvent.click(countryLink);

    expect(actionSpy).toBeCalled();
  });
});
