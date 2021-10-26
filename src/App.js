import React from "react";
import Nav from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Globalstyle from "./Globalstyle";
import Hero from './components/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import NoMatch from "./components/NoMatch";
import ViewDog from "./components/ViewDog";


function App() {
  return (
    <>
      <Globalstyle>
        <Nav/>
        <Router>
          <Switch>
            <Route exact path="/">
              <Hero/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/dogs/:id">
              <ViewDog/>
            </Route>
            <Route>
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
      </Globalstyle>
    </>
  );
}

export default App;
