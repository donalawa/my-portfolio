import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { Landing, About, Projects, Contact } from './pages/index';
import PageContainer from './components/PageContainer/PageContainer';
import { useState } from  'react';
import NavContext from './context/NavContext';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={(<NavContext.Provider value={{navOpen, setNavOpen}}> <PageContainer name="home"><Landing /> </PageContainer></NavContext.Provider>)} />
            <Route path="/about" element={(<NavContext.Provider value={{navOpen, setNavOpen}}>  <PageContainer name="about"><About /> </PageContainer></NavContext.Provider>)}/>
            <Route path="/contact" element={(<NavContext.Provider value={{navOpen, setNavOpen}}> <PageContainer name="contact"><Contact /> </PageContainer></NavContext.Provider>)}/>
            <Route path="/projects" element={(<NavContext.Provider value={{navOpen, setNavOpen}}> <PageContainer name="projects"><Projects /> </PageContainer></NavContext.Provider>)}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
