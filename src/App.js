import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { Landing, About, Projects, Contact } from './pages/index';
import PageContainer from './components/PageContainer/PageContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={(<PageContainer name="home"><Landing /> </PageContainer>)}/>
            <Route path="/about" element={(<PageContainer name="about"><About /> </PageContainer>)}/>
            <Route path="/contact" element={(<PageContainer name="contact"><Contact /> </PageContainer>)}/>
            <Route path="/projects" element={(<PageContainer name="projects"><Projects /> </PageContainer>)}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
