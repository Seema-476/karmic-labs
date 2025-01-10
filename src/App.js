import './App.css';
import BackToTop from './common/BackToTop';
import PreLoader from './common/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <>
      <PreLoader/>
      <Header/>
      <Hero />
      <Projects/>
      <Services />
      <BackToTop/>
    </>
  );
}

export default App;
