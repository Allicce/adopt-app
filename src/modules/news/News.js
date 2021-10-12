import React from "react";
import NewsArticle from "../../common/components/newsArticle/NewsArticle";
import { NewsWrapper } from "./NewsWrapper";

const News = () => {
  return (
    <NewsWrapper>
      <h3>News</h3>
      <NewsArticle />
    </NewsWrapper>
  );
};
export default News;
