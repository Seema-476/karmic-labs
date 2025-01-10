import './App.css';
import BackToTop from './common/BackToTop';
import PreLoader from './common/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingProjects from './components/UpcomingProjects';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <PreLoader/>
      <Header/>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects/>
      <BackToTop/>
    </>
  );
}

export default App;
