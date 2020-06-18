import {
  fetchArticlesFail,
  fetchArticlesSuccess,
  fetchArticlesStart,
  fetchArticles,
} from "../top-news.actions";

describe("topNewsActions test", () => {
  it("dispatches fetchArticlesSuccess() action", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: jest
          .fn()
          .mockImplementation(() => Promise.resolve({ articles: [] })),
      })
    );

    const dispatch = jest.fn();

    await fetchArticles("gb")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(fetchArticlesStart());
    expect(dispatch).toHaveBeenCalledWith(fetchArticlesSuccess([]));
  });

  it("dispatches fetchArticlesFail() action", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: jest.fn().mockImplementation(() => Promise.reject("err")),
      })
    );

    const dispatch = jest.fn();

    await fetchArticles("gb")(dispatch);

    expect(dispatch).toHaveBeenCalledWith(fetchArticlesFail("err"));
  });
});
