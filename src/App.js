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

import { fetchProjects, fetchContactInfo, fetchAboutInfo} from './services';

import HashLoader from "react-spinners/HashLoader";

import AnimatedCursor from "react-animated-cursor"

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();

  let  { setAllProjects,  setContactInfo, setActiveFile, setAboutInfo, setHobbies} = bindActionCreators(actionCreators, dispatch);
  const [loading, setLoading] = useState(false);

  const getProjects = () => {
    setLoading(true)
    const allProjects = [];
    
    // console.log('GET PROJECTS BELOW');
    fetchProjects().then(res => {
      res.forEach(doc => {
        allProjects.push(doc.data());
      })

      // console.log('ALL PROJECTS',  allProjects)
      // SET PROJECTS TO  REDUX
      setAllProjects(allProjects);
    }).catch(err => {
      console.log('Error', err);
    })
  }

  const getContactInfo = () => {
    // fetch contact info
    const contactInfo = [];
    
    // console.log('GET PROJECTS BELOW');
    fetchContactInfo().then(res => {
      res.forEach(doc => {
        contactInfo.push(doc.data());
      })

      // console.log('Contact Info inAPPPPPP',  contactInfo)
      // SET PROJECTS TO  REDUX
      setContactInfo(...contactInfo)
    }).catch(err => {
      console.log('Error', err);
    })
  }

  const getAboutInfo = () => {
    
    // FETCH  ABOUT FILES HERE
    const allFiles = [];
    
    // console.log('GET PROJECTS BELOW');
    fetchAboutInfo().then(res => {
      res.forEach(doc => {
        allFiles.push(doc.data());
      })

      // console.log('ALL Files',  allFiles[0]?.hobbies)
      // console.log(allFiles[0]?.aboutInfo)
    setActiveFile(allFiles[0]?.aboutInfo[0]?.files[0]);
    setAboutInfo(allFiles[0]?.aboutInfo);
    setHobbies(allFiles[0]?.hobbies);
    setLoading(false);
    }).catch(err => {
      console.log('Error', err);
    })

    // SET ABOUT  INFO AS ACTIVE FILE
    // console.log(allFiles[0]?.aboutInfo)

    // SET OTHER FILES
    // setActiveFile(allFiles[0]?.aboutInfo[0]?.files[0]);
  }


  useEffect(() => {
    getProjects();
    getContactInfo();
    getAboutInfo();
  },[])
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={8}
      outerSize={18}
      color='84, 102, 232'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    {loading &&  <HashLoader
        color="#4D5BCE"
        loading={true}
        cssOverride={{}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> }
     {!loading && <BrowserRouter>
          <Routes>
            <Route path="/" element={(<NavContext.Provider value={{navOpen, setNavOpen}}> <PageContainer name="home"><Landing /> </PageContainer></NavContext.Provider>)} />
            <Route path="/about" element={(<NavContext.Provider value={{navOpen, setNavOpen}}>  <PageContainer name="about"><About /> </PageContainer></NavContext.Provider>)}/>
            <Route path="/contact" element={(<NavContext.Provider value={{navOpen, setNavOpen}}> <PageContainer name="contact"><Contact /> </PageContainer></NavContext.Provider>)}/>
            <Route path="/projects" element={(<NavContext.Provider value={{navOpen, setNavOpen}}> <PageContainer name="projects"><Projects /> </PageContainer></NavContext.Provider>)}/>
          </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
