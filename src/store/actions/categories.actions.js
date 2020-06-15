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

/**
 * Fetches ARTICLES by each category and dispatches success and error actions
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
