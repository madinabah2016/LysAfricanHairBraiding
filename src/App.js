import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './containers/home';
import About from './containers/about';
import HairStyle from './containers/hairStyles';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/hairStyles" component={HairStyle} />
            <Redirect to="/" />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
