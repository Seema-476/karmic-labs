import './App.css';
import BackToTop from './common/BackToTop';
import PreLoader from './common/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingProjects from './components/UpcomingProjects';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Values from './components/Values';
import Karmic from './components/Kramic';

function App() {
  return (
    <>
      <PreLoader/>
      <Header/>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <Karmic/>
      <Values/>
      <Footer/>
      <BackToTop/>
    </>
  );
}

export default App;
