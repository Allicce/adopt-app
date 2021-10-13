import React from "react";
import NewsArticle from "../../common/components/newsArticle/NewsArticle";
import { NewsWrapper } from "./NewsWrapper";
import news from "../../assets/news.json";

const News = () => {
  return (
    <NewsWrapper>
      <h3>News</h3>
      {news.news.map((article) => (
        <NewsArticle {...article} />
      ))}
    </NewsWrapper>
  );
};
export default News;
