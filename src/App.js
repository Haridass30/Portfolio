import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStripe from './components/LogoStripe';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';

function App() {
  return (
    <ClickSpark
      sparkColor="#8b5cf6"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="App">
        <Navbar />
        <Hero />
        <LogoStripe />
        <About />
        <Experience />
        <LogoStripe />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
