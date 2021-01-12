import './App.css';
import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Social from "./components/Social";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Team from "./pages/Team";


function App() {
  return (
    <div className="App">
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

          <Route path="/">
            <Hero />
          </Route>
        </Switch>


      </Router>
        
    </div>
  );
}

export default App;
