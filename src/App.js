import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { Landing, About, Projects, Contact } from './pages/index';
import PageContainer from './components/PageContainer/PageContainer';
import { useState, useEffect } from  'react';
import NavContext from './context/NavContext';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

import { fetchProjects } from './services';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();

  let  { setAllProjects } = bindActionCreators(actionCreators, dispatch);

  const getProjects = () => {
    const allProjects = [];
    
    console.log('GET PROJECTS BELOW');
    fetchProjects().then(res => {
      res.forEach(doc => {
        allProjects.push(doc.data());
      })

      console.log('ALL PROJECTS',  allProjects)
      // SET PROJECTS TO  REDUX
      setAllProjects(allProjects);
    }).catch(err => {
      console.log('Error', err);
    })
  }

  useEffect(() => {
    getProjects();
  },[])
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
