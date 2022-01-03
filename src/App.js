import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import Header from "./modules/header/Header";
import AllTypeOfAnimalPage from "./pages/allTypeOfAnimalPage/AllTypeOfAnimalPage";
import animalInShelter from "../src/assets/animalInShelter.json";
import SignInPage from "./pages/signInPage/SignInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignUpAdditionalInformationPage from "./pages/signUpPage/signUpAdditionalInformationPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <WelcomePage animalInShelter={animalInShelter} {...props} />
          )}
        />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route
          exact
          path="/signup/additionalInformation"
          component={SignUpAdditionalInformationPage}
        />
        <Route
          exact
          path="/:animalsId"
          render={(props) => (
            <AllTypeOfAnimalPage
              allTypeOfAnimalInShelter={
                animalInShelter[props.match.params.animalsId]
              }
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
