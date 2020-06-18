import React, { useState, useEffect } from "react";
import { render, fireEvent, act } from "@testing-library/react";
import useDebounce from "./use-debounce";

jest.useFakeTimers();

const mockFunction = jest.fn();

const TestComponent = () => {
  const [searchingTerm, setSearchingTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchingTerm, 2000);
  useEffect(() => {
    if (debouncedSearchTerm) {
      mockFunction(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    <div>
      <p data-testid="result">{debouncedSearchTerm}</p>
      <input
        data-testid="search-input"
        placeholder="Search term..."
        onChange={(event) => setSearchingTerm(event.target.value)}
      ></input>
    </div>
  );
};

it("should update value after specified delay has passed", () => {
  const { queryByTestId } = render(<TestComponent />);

  act(() => {
    fireEvent.change(queryByTestId("search-input"), { target: { value: "a" } });
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

  expect(mockFunction).toBeCalledTimes(1);
});
