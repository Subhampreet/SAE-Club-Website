import './App.css';
import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Social />
        <Hero />
    </div>
  );
}

export default App;
