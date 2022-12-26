import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { Landing, About } from './pages/index';
import PageContainer from './components/PageContainer/PageContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={(<PageContainer name="home"><Landing /> </PageContainer>)}/>
            <Route path="/about" element={(<PageContainer name="about"><About /> </PageContainer>)}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
