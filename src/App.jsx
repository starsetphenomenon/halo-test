import './App.css';
import GetStarted from './screens/GetStarted/GetStarted';
import Promo from './screens/Promo/Promo';
import Team from './screens/Team/Team';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Promo />
      <Team />
      <GetStarted />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
