import Carousel from './Carousel';
import Footer from '../Footer';
import Nav from '../Nav';
import { useEffect, useState } from 'react';

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <>
          <Nav />
          <Carousel />
          <Footer />
        </>
      )}
    </>
  );
}

export default Projects;
