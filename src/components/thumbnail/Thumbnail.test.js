import React from "react";
import Thumbnail from "./Thumbnail";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Test Thumbnail component", () => {
  it("should render correctly", () => {
    const store = mockedStore();

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Thumbnail
            article={{
              title: "title",
              description: "desc",
              urlToImage: "some-url",
            }}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
