import React from "react";
import Search from "./Search";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.useFakeTimers();

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

  it("should fetch data only once in delay", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: jest
          .fn()
          .mockImplementation(() => Promise.resolve({ articles: [] })),
      })
    );

    act(() => {
      fireEvent.change(queryByTestId("search-input"), {
        target: { value: "a" },
      });
      fireEvent.change(queryByTestId("search-input"), {
        target: { value: "ab" },
      });
      fireEvent.change(queryByTestId("search-input"), {
        target: { value: "abv" },
      });
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(window.fetch).toBeCalledTimes(1);
  });
});
