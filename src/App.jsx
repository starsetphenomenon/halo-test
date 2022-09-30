import './App.css';
import GetStarted from './screens/GetStarted/GetStarted';
import Promo from './screens/Promo/Promo';
import Team from './screens/Team/Team';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';


function App() {

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <ParallaxProvider>
        <Promo winWidth={windowSize.innerWidth} />
        <Team />
        <GetStarted winWidth={windowSize.innerWidth} />
        <Slider />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
