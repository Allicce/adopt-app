import React from "react";
import RectangleButton from "../buttons/rectangleButton/RectangleButton";
import news from "../../../assets/img/image-from-rawpixel-id-437398-jpeg.jpg";
import defaultImage from "../../../assets/img/image-from-rawpixel-id-3284972-jpeg.jpg";
import { NewsArticleWrapper } from "./NewsArticleWrapper";
import LineButton from "../buttons/lineButton/LineButton";

const NewsArticle = ({ date, header, text, img }) => {
  const newDate = new Date(date * 1000).toLocaleDateString("de-AT");
  return (
    <NewsArticleWrapper img={img === "default" ? defaultImage : news}>
      <div className="news-header">
        <p className="date">{newDate}</p>
        <h4>{header}</h4>
      </div>
      <p className="text">{text}</p>
      <LineButton> More info </LineButton>
    </NewsArticleWrapper>
  );
};
export default NewsArticle;
