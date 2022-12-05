import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Landing } from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
        <div className="main-content">
        <div className="top">
          <Footer />
          <div className="main-info">
              <Landing />
          </div>
        </div>
        <div className="bottom">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
