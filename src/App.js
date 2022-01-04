import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import Header from "./modules/header/Header";
import AllTypeOfAnimalPage from "./pages/allTypeOfAnimalPage/AllTypeOfAnimalPage";
import animalInShelter from "../src/assets/animalInShelter.json";
import SignInPage from "./pages/signInPage/SignInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignUpAdditionalInformationPage from "./pages/signUpPage/signUpAdditionalInformationPage";
import { auth, createUserProfileDocument, db } from "./firebase/firebase.utils";
import { doc, onSnapshot } from "firebase/firestore";
import Redirect from "react-router-dom/es/Redirect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const unsub = onSnapshot(doc(db, "users", userRef.id), (doc) => {
          this.setState({
            currentUser: {
              id: userRef.id,
              ...doc.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <WelcomePage animalInShelter={animalInShelter} {...props} />
            )}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignUpPage />
            }
          />

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
}

export default App;
