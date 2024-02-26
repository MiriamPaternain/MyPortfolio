import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
