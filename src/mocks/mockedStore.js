import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
export const initialState = {
  topNews: {},
  countries: {
    supportedCountries: [{ countryId: "gb", countryName: "Gb" }],
  },
  categories: {},
  article: {
    activeArticle: {
      title: "active",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2020/06/17/16/29719992-0-image-a-23_1592408042536.jpg",
      description: "desc",
    },
  },
};

export const mockedStore = (state = initialState) => {
  const mockStore = configureStore(middlewares);
  return mockStore(state);
};
