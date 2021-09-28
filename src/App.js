import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import Header from "./modules/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <WelcomePage />} />
      </Switch>
    </div>
  );
}

export default App;
