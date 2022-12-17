import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Skills from './PortfolioContainer/Skills/Skills';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Projects from './PortfolioContainer/Projects/Projects';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <ContactMe />
    </div>
  );
}

export default App;