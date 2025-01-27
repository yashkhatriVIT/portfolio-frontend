import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Skills from './PortfolioContainer/Skills/Skills';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Projects from './PortfolioContainer/Projects/Projects';
import CurrencyConverter from './PortfolioContainer/AboutMe/List';
import List from './PortfolioContainer/AboutMe/List';

function App() {
  return (
    <div className="App">
        {/* <Navbar />
        <Home />
        <Skills />
        <Projects />
        <ContactMe /> */}
        <List />
    </div>
  );
}

export default App;