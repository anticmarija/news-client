export const SET_ACTIVE_ARTICLE = "SET_ACTIVE_ARTICLE";

/**
 * Action creators
 */
export const setActiveArticle = (article) => {
  return { type: SET_ACTIVE_ARTICLE, payload: article };
};
