import topNewsReducer from "../top-news.reducer";
import {
  fetchArticlesStart,
  fetchArticlesFail,
  fetchArticlesSuccess,
} from "../../actions/top-news.actions";
import { initialState } from "../top-news.reducer";

describe("topNewsReducer test", () => {
  it("should return right state", () => {
    expect(topNewsReducer({}, fetchArticlesStart())).toEqual({
      loading: true,
    });
  });

  it("should return right state", () => {
    expect(
      topNewsReducer({}, fetchArticlesSuccess([{ title: "article" }]))
    ).toEqual({
      articles: [{ title: "article" }],
      loading: false,
    });
  });

  it("should return right state", () => {
    expect(topNewsReducer({}, fetchArticlesFail("err"))).toEqual({
      error: "err",
      loading: false,
    });
  });

  it("should return initial state", () => {
    expect(topNewsReducer(undefined, undefined)).toEqual(initialState);
  });

  it("should return given state", () => {
    expect(
      topNewsReducer(
        {},
        {
          type: "SOME_UNKNOWN_ACTION",
        }
      )
    ).toEqual({});
  });
});
