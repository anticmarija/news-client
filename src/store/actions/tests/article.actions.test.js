import { SET_ACTIVE_ARTICLE, setActiveArticle } from "../article.actions";

describe("articleActions test", () => {
  it("setActiveArticle() should correct action type", () => {
    expect(setActiveArticle()).toEqual({
      type: SET_ACTIVE_ARTICLE,
    });
  });
});
