import React from "react";
import Footer from "../../modules/footer/Footer";
import { LandingPageWrapper } from "./LandingPageWrapper";
import logo from "../../assets/img/you (1).png";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import News from "../../modules/news/News";
import AnimalList from "../../modules/animalList/AnimalList";
import animalInShelter from "../../assets/animalInShelter.json";
import { MainWrapper } from "./MainWrapper";

export const WelcomePage = () => {
  return (
    <div>
      <LandingPageWrapper>
        <div className="left-side">
          <div className="logo">
            <img src={logo} />
          </div>
          <h2>We are shelter for abandoned dogs and cats</h2>
          <p>We are team of volunteers</p>
          <div className="cta">
            <RectangleButton bigger> More about us </RectangleButton>
          </div>
        </div>
      </LandingPageWrapper>
      <MainWrapper>
        <News />
        <div className="content-wrapper">
          {Object.keys(animalInShelter).map((key) => (
            <AnimalList
              groupOfAnimal={animalInShelter[key]}
              key={key}
              name={key}
            />
          ))}
        </div>
      </MainWrapper>
      <Footer />
    </div>
  );
};
