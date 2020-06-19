import React from "react";
import Thumbnail from "./Thumbnail";
import { mockedStore } from "../../mocks/mockedStore";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as actionsCountries from "../../store/actions/countries.actions";
import * as actionsArticles from "../../store/actions/article.actions";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (s) => s }),
}));

const store = mockedStore();

describe("Test Thumbnail component", () => {
  it("should render correctly", () => {
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

  it("should disable changing countries correctly", () => {
    const { queryByTestId } = render(
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

    const countryLink = queryByTestId("more-link");

    const actionArticleSpy = jest.spyOn(actionsArticles, "setActiveArticle");
    const actionCountriesSpy = jest.spyOn(
      actionsCountries,
      "disableChangingCountries"
    );

    fireEvent.click(countryLink);

    expect(actionArticleSpy).toBeCalled();
    expect(actionCountriesSpy).toBeCalled();
  });
});
