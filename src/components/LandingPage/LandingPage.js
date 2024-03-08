import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import SectionMyProjects from './SectionMyProjects';
import Nav from '../Nav';
import Footer from '../Footer';
import backgroundLoader from '../../img/fondo loading.png';
import { useEffect, useState } from 'react';
import fixedImg2 from '../../img/fixedImg2.jpg';

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
          <img src={fixedImg2} alt='' className='fixedImg' />
          <div className='fixedImgContainer'></div>
          <SectionMyProjects />
          <Footer />
        </main>
      )}
    </>
  );
}
export default LandingPage;
