import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticlesPerCategory } from "../../store/actions/categories.actions";
import Thumbnail from "../thumbnail/Thumbnail";

const Category = () => {
  let { activeCountry } = useSelector((state) => state.countries);

  let { categoryName } = useParams();
  let { loadingAllCategoryArticles, allCategoryArticles } = useSelector(
    (state) => state.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllArticlesPerCategory(activeCountry, categoryName));
  }, [activeCountry, categoryName]);

  return (
    <div>
      Category {categoryName.toUpperCase()}
      {loadingAllCategoryArticles ? (
        "Loading...."
      ) : (
        <div>
          {allCategoryArticles.map((article) => (
            <Thumbnail
              key={`${article.title}_${article.publishedAt}`}
              article={article}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
