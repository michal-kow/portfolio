import './App.scss';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Navbar from './Navbar';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
