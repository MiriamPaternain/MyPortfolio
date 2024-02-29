import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import LandingPage from './LandingPage/LandingPage';
import About from './About';
import Projects from './ProjectsPage/Projects';
import Contact from './Contact';
import MyStore from './ProjectsPage/EachProjectDetail/MyStore';
import DoLister from './ProjectsPage/EachProjectDetail/DoLister';
import TheGreenCoffe from './ProjectsPage/EachProjectDetail/TheGreenCoffe';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Projects/MyStore' element={<MyStore />} />
        <Route path='/Projects/DoLister' element={<DoLister />} />
        <Route path='/Projects/TheGreenCoffe' element={<TheGreenCoffe />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
