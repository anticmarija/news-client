import categoryReducer from "../categories.reducer";
import { initialState } from "../categories.reducer";

import {
  setCategories,
  fetchTop5ArticlesPerCategoryStart,
  fetchTop5ArticlesPerCategorySuccess,
  fetchTop5ArticlesPerCategoryFail,
  fetchTop5ArticlesPerCategoryDone,
  fetchAllArticlesPerCategoryStart,
  fetchAllArticlesPerCategorySuccess,
  fetchAllArticlesPerCategoryFail,
} from "../../actions/categories.actions";

describe("categoryReducer test", () => {
  it("should return right state", () => {
    expect(categoryReducer({}, setCategories(["gb, us"]))).toEqual({
      supportedCategories: ["gb, us"],
    });
  });

  it("should return initial state", () => {
    expect(categoryReducer(undefined, undefined)).toEqual(initialState);
  });

  it("should return state", () => {
    expect(
      categoryReducer(
        {},
        {
          type: "SOME_UNKNOWN_ACTION",
        }
      )
    ).toEqual({});
  });

  it("should return right state", () => {
    expect(categoryReducer({}, fetchTop5ArticlesPerCategoryStart())).toEqual({
      loadingCategories: true,
    });
  });

  it("should return right state", () => {
    expect(
      categoryReducer(
        {},
        fetchTop5ArticlesPerCategorySuccess({ category: "gb", articles: [] })
      )
    ).toEqual({
      categoryArticles: { gb: [] },
    });
  });

  it("should return right state", () => {
    expect(
      categoryReducer({}, fetchTop5ArticlesPerCategoryFail("error"))
    ).toEqual({
      error: "error",
      loadingCategories: false,
    });
  });

  it("should return right state", () => {
    expect(categoryReducer({}, fetchTop5ArticlesPerCategoryDone())).toEqual({
      loadingCategories: false,
    });
  });

  it("should return right state", () => {
    expect(categoryReducer({}, fetchAllArticlesPerCategoryStart())).toEqual({
      loadingAllCategoryArticles: true,
    });
  });

  it("should return right state", () => {
    expect(
      categoryReducer(
        {},
        fetchAllArticlesPerCategorySuccess([{ test: "test" }])
      )
    ).toEqual({
      loadingAllCategoryArticles: false,
      allCategoryArticles: [{ test: "test" }],
    });
  });

  it("should return right state", () => {
    expect(
      categoryReducer({}, fetchAllArticlesPerCategoryFail("error"))
    ).toEqual({
      loadingAllCategoryArticles: false,
      error: "error",
    });
  });
});
