import config from "../../config";

export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAIL = "FETCH_ARTICLES_FAIL";

/**
 * Action creators
 */
export const fetchArticlesStart = () => {
  return { type: FETCH_ARTICLES_START };
};

export const fetchArticlesSuccess = (articles) => {
  return { type: FETCH_ARTICLES_SUCCESS, payload: articles };
};

export const fetchArticlesFail = (error) => {
  return { type: FETCH_ARTICLES_FAIL, payload: error };
};

/**
 * Fetches ARTICLES and dispatches success and error actions
 */
export const fetchArticles = (countryId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchArticlesStart());

      const response = await fetch(
        `${config.getApiBaseUrl()}/top-headlines?country=${countryId}&apiKey=${config.getApiKey()}`
      );

      const { articles } = await response.json();

      dispatch(fetchArticlesSuccess(articles));
    } catch (err) {
      dispatch(fetchArticlesFail(err));
    }
  };
};
