import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Exercises from "./components/Exercises/Exercises";
import CreateUser from "./components/CreateUser/CreateUser";
import CreateExercise from "./components/CreateExercise/CreateExercise";
import Home from "./components/Home/Home";
import "fontsource-roboto";
import NavBar from "./components/NavBar/NavBar";
import BottomBar from "./components/BottomBar/BottomBar";

function App() {
  const [actualPage, setActualPage] = useState("Home");
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <Router>
        <NavBar actualPage={actualPage} className="NavBar" />
        <div className="switch">
          <Switch style={{ margin: 100 }}>
            <Route exact path="/" component={Home} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/createuser" component={CreateUser} />
            <Route path="/createexercise" component={CreateExercise} />
          </Switch>
        </div>
        <BottomBar setActualPage={setActualPage} />
      </Router>
    </div>
  );
}

export default App;
