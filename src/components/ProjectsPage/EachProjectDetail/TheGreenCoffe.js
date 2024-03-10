import Footer from '../../Footer';
import Nav from '../../Nav';
import illustrator from '../../../img/ilustrador.png';
import photoshop from '../../../img/photoshop.png';
import figma from '../../../img/figma.png';
import { FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import TGC1 from '../../../img/TGC1.png';
import TGC2 from '../../../img/TGC2.png';
import TGC3 from '../../../img/TGC3.png';
import { IoLogoBehance } from 'react-icons/io5';

function TheGreenCoffe() {
  return (
    <>
      <Nav />
      <main className='myStoreContainer'>
        <p className='myStoreContainer_title'>The Green Coffee</p>
        <p className='myStoreContainer_resume'>
          The Green Coffee es un proyecto personal de branding que surje por mi
          gran pasión con las plantas. Un lugar donde relajarse rodeado de
          plantas, donde tomarse un té, un café o lo que quieras y salir de allí
          como nuevo con una nueva plantita en tus brazos.
        </p>
        <p className='myStoreContainer_skillsTitle'>Skills:</p>
        <div className='myStoreContainer_skills'>
          <img
            src={illustrator}
            alt=''
            className='myStoreContainer_skills--icon'
          />
          <img
            src={photoshop}
            alt=''
            className='myStoreContainer_skills--icon'
          />
          <img src={figma} alt='' className='myStoreContainer_skills--icon' />
        </div>

        <a
          href='https://www.behance.net/gallery/163462295/The-Green-Coffee-Diseno-de-marca'
          target='_blank'
          rel='noreferrer'
          className='myStoreContainer_link'>
          <button className='myStoreContainer_link--btn'>
            <IoLogoBehance className='myStoreContainer_link--icon' /> Behance
          </button>
        </a>

        <img src={TGC1} alt='' className='myStoreContainer_img' />
        <img src={TGC2} alt='' className='myStoreContainer_img' />
        <img src={TGC3} alt='' className='myStoreContainer_img' />
        <img src='' alt='' className='myStoreContainer_img' />
      </main>
      <Footer />
    </>
  );
}

export default TheGreenCoffe;
