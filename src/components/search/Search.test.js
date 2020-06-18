import React from "react";
import Search from "./Search";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import useDebounce from "../../hooks/use-debounce";

jest.mock("../../hooks/use-debounce");

const store = mockedStore();

describe("Test Search component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should search based on input", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.change(queryByTestId("search-input"), { target: { value: "a" } });

    expect(useDebounce).toBeCalledWith("a", 500);
  });
});
