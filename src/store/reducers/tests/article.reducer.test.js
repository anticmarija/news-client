import articleReducer from "../article.reducer";
import { setActiveArticle } from "../../actions/article.actions";

describe("articleReducer test", () => {
  it("should return right state", () => {
    expect(
      articleReducer(
        {},
        setActiveArticle({ title: "my article", decription: "my desc" })
      )
    ).toEqual({
      activeArticle: { title: "my article", decription: "my desc" },
    });
  });

  it("should return initial state", () => {
    expect(articleReducer(undefined, undefined)).toEqual({
      activeArticle: {},
    });
  });

  it("should return initial state", () => {
    expect(
      articleReducer(
        {},
        {
          type: "SOME_UNKNOWN_ACTION",
        }
      )
    ).toEqual({});
  });
});
