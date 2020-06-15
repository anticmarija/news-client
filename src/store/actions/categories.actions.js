import config from "../../config";

export const SET_CATEGORIES = "SET_CATEGORIES";

export const FETCH_TOP_5_ARTICLES_PER_CATEGORY_START =
  "FETCH_TOP_5_ARTICLES_PER_CATEGORY_START";
export const FETCH_TOP_5_ARTICLES_PER_CATEGORY_SUCCESS =
  "FETCH_TOP_5_ARTICLES_PER_CATEGORY";
export const FETCH_TOP_5_ARTICLES_PER_CATEGORY_FAIL =
  "FETCH_TOP_5_ARTICLES_PER_CATEGORY_FAIL";
export const FETCH_TOP_5_ARTICLES_PER_CATEGORY_DONE =
  "FETCH_TOP_5_ARTICLES_PER_CATEGORY_DONE";

export const FETCH_ALL_ARTICLES_PER_CATEGORY_START =
  "FETCH_ALL_ARTICLES_PER_CATEGORY_START";
export const FETCH_ALL_ARTICLES_PER_CATEGORY_SUCCESS =
  "FETCH_ALL_ARTICLES_PER_CATEGORY_SUCCESS";
export const FETCH_ALL_ARTICLES_PER_CATEGORY_FAIL =
  "FETCH_ALL_ARTICLES_PER_CATEGORY_FAIL";

/**
 * Action creators
 */
export const setCategories = (categories) => {
  return { type: SET_CATEGORIES, payload: categories };
};

export const fetchTop5ArticlesPerCategoryStart = () => {
  return { type: FETCH_TOP_5_ARTICLES_PER_CATEGORY_START };
};

export const fetchTop5ArticlesPerCategorySuccess = (categoryWithArticles) => {
  return {
    type: FETCH_TOP_5_ARTICLES_PER_CATEGORY_SUCCESS,
    payload: categoryWithArticles,
  };
};

export const fetchTop5ArticlesPerCategoryDone = () => {
  return {
    type: FETCH_TOP_5_ARTICLES_PER_CATEGORY_DONE,
  };
};

export const fetchTop5ArticlesPerCategoryFail = (error) => {
  return { type: FETCH_TOP_5_ARTICLES_PER_CATEGORY_FAIL, payload: error };
};

export const fetchAllArticlesPerCategoryStart = () => {
  return { type: FETCH_ALL_ARTICLES_PER_CATEGORY_START };
};

export const fetchAllArticlesPerCategorySuccess = (allCategoryArticles) => {
  return {
    type: FETCH_ALL_ARTICLES_PER_CATEGORY_SUCCESS,
    payload: allCategoryArticles,
  };
};

export const fetchAllArticlesPerCategoryFail = (error) => {
  return { type: FETCH_ALL_ARTICLES_PER_CATEGORY_FAIL, payload: error };
};

/**
 * Fetches top 5 ARTICLES by each category and dispatches success and error actions
 */
export const fetchTop5ArticlesPerCategory = (countryId, categories) => {
  return async (dispatch) => {
    try {
      dispatch(fetchTop5ArticlesPerCategoryStart());

      const apiCall = async (countryId, category) => {
        return new Promise((resolve, reject) => {
          fetch(
            `${config.getApiBaseUrl()}/top-headlines?country=${countryId}&category=${category}&pageSize=5&apiKey=${config.getApiKey()}`
          )
            .then((response) => {
              response.json().then(({ articles }) => {
                dispatch(
                  fetchTop5ArticlesPerCategorySuccess({ category, articles })
                );
                resolve(articles);
              });
            })
            .catch((err) => reject(err));
        });
      };

      Promise.all(
        categories.map((category) => apiCall(countryId, category))
      ).then(() => {
        dispatch(fetchTop5ArticlesPerCategoryDone());
      });
    } catch (err) {
      dispatch(fetchTop5ArticlesPerCategoryFail(err));
    }
  };
};

/**
 * Fetches all ARTICLES by category and dispatches success and error actions
 */
export const fetchAllArticlesPerCategory = (countryId, category) => {
  return async (dispatch) => {
    try {
      dispatch(fetchAllArticlesPerCategoryStart());

      const response = await fetch(
        `${config.getApiBaseUrl()}/top-headlines?country=${countryId}&category=${category}&apiKey=${config.getApiKey()}`
      );

      const { articles } = await response.json();

      dispatch(fetchAllArticlesPerCategorySuccess(articles));
    } catch (err) {
      dispatch(fetchAllArticlesPerCategoryFail(err));
    }
  };
};
