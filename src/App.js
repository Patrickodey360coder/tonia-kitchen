import React from "react";
import Nav from './components/Navbar';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Globalstyle from "./Globalstyle";
import Hero from './components/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Globalstyle>
        <Nav/>
        <Router>
          <Switch>
            <Route exact path="/https://github.com/Patrickodey360coder/tonia-kitchen/">
              <Hero/>
            </Route>
            <Route exact path="/https://github.com/Patrickodey360coder/tonia-kitchen/about">
              <About/>
            </Route>
            <Route exact path="https://github.com/Patrickodey360coder/tonia-kitchen/contact">
              <Contact/>
            </Route>
            <Route>
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Globalstyle>
    </>
  );
}

export default App;
