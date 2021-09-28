import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./common/components/navbar/Navbar";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <WelcomePage />} />
      </Switch>
    </div>
  );
}

export default App;
