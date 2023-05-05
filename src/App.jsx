import About from './section/About/About';
import Contact from './section/Contact/Contact';
import FloatingNav from './section/Floating-nav/FloatingNav';
import Footer from './section/Footer/Footer';
import Header from './section/Header/Header';
import Navbar from './section/Navbar/Navbar';
import Portfolio from './section/Portfolio/Portfolio';
import Skills from './section/Skills/Skills';
import Particle from "./particle";

const App = () => {
  return (
    <>
    <Particle/>
    <main>
      <Navbar />
      <Header />
      <FloatingNav/>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
