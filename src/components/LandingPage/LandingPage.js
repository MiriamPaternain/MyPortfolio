import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import SectionMyProjects from './SectionMyProjects';
import Nav from '../Nav';
import Footer from '../Footer';
import backgroundLoader from '../../img/fondo loading.png';
import { useEffect, useState } from 'react';

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <div className='loader'>
          <div class='lds-roller'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <main className='landingPage'>
          <Nav />
          <Section1 />
          <Section2 />
          <Section3 />
          <SectionMyProjects />
          <Footer />
        </main>
      )}
    </>
  );
}
export default LandingPage;
