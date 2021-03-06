import './App.css';
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Social from "./components/Social";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Team from "./components/Team";
import CoreTeam from "./components/CoreTeam";
import Founder from "./components/Founder";
import Ach from "./components/Ach";
import Contact from "./components/Contact";
import React, {useEffect} from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import AOS from "aos";
  import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <DeviceOrientation lockOrientation={'landscape'}>
        <Orientation orientation='landscape' alwaysRender={false}>

          <Router>
            <Header />
            <Nav />
            <Social />
            <Switch>
              <Route path="/about/">
                <About />
              </Route>
              <Route path="/team/">
                <Team />
              </Route>
              <Route path="/coreteam/">
                <CoreTeam />
              </Route>
              <Route path="/founder/">
                <Founder />
              </Route>
              <Route path="/achievement/">
                <Ach />
              </Route>
              <Route path="/contact/">
                <Contact />
              </Route>

              <Route path="/">
                <Hero />
              </Route>
            </Switch>


          </Router>
        </Orientation>
      </DeviceOrientation>
        
    </div>
  );
}

export default App;
