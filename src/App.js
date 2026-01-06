import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';

function App() {
  return (
    <ClickSpark
      sparkColor="#22c55e"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <TechStack />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
