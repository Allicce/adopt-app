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
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const unsub = onSnapshot(doc(db, "users", userRef.id), (doc) => {
          setCurrentUser({
            id: userRef.id,
            ...doc.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
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
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route
            exact
            path="/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
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

const mapStateToProps = createStructuredSelector({
  currentUser: setCurrentUser,
});

const maDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, maDispatchToProps)(App);
