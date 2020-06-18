import {
  SET_CATEGORIES,
  setCategories,
  fetchAllArticlesPerCategoryStart,
  fetchAllArticlesPerCategory,
  fetchAllArticlesPerCategorySuccess,
  fetchAllArticlesPerCategoryFail,
} from "../categories.actions";

describe("categoriesActions test", () => {
  it("setActivecategories() should correct action type", () => {
    expect(setCategories()).toEqual({
      type: SET_CATEGORIES,
    });
  });

  it("dispatches fetchAllArticlesPerCategorySuccess() action", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: jest
          .fn()
          .mockImplementation(() => Promise.resolve({ articles: [] })),
      })
    );

    const dispatch = jest.fn();

    await fetchAllArticlesPerCategory("gb", "business")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(fetchAllArticlesPerCategoryStart());
    expect(dispatch).toHaveBeenCalledWith(
      fetchAllArticlesPerCategorySuccess([])
    );
  });

  it("dispatches fetchAllArticlesPerCategoryFail() action", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: jest.fn().mockImplementation(() => Promise.reject("err")),
      })
    );

    const dispatch = jest.fn();

    await fetchAllArticlesPerCategory("gb", "business")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      fetchAllArticlesPerCategoryFail("err")
    );
  });
});
