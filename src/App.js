import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navvbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
