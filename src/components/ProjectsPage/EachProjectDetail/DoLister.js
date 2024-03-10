import Footer from '../../Footer';
import Nav from '../../Nav';
import html from '../../../img/html-5.png';
import css from '../../../img/css-3.png';
import js from '../../../img/js.png';
import react from '../../../img/react.png';
import node from '../../../img/node.png';
import git from '../../../img/git.png';
import terminal from '../../../img/terminal.png';
import { FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import DL1 from '../../../img/DL1.png';
import DL2 from '../../../img/DL2.png';
import DLS3 from '../../../img/DL3.png';

function DoLister() {
  return (
    <>
      <Nav />
      <main className='myStoreContainer'>
        <p className='myStoreContainer_title'>Do Lister</p>
        <p className='myStoreContainer_resume'>
          DoLister es una aplicación web para realizar listas. Cada elemento
          añadido se puede tachar una vez que ya se ha realizado y también se
          puede borrar. Ademas cuenta con un buscador para encontrar antes la
          tarea que se está buscando.
        </p>
        <p className='myStoreContainer_skillsTitle'>Skills:</p>
        <div className='myStoreContainer_skills'>
          <img src={html} alt='' className='myStoreContainer_skills--icon' />
          <img src={css} alt='' className='myStoreContainer_skills--icon' />
          <img src={js} alt='' className='myStoreContainer_skills--icon' />
          <img src={react} alt='' className='myStoreContainer_skills--icon' />
          <img src={node} alt='' className='myStoreContainer_skills--icon' />
          <img src={git} alt='' className='myStoreContainer_skills--icon' />
          <img
            src={terminal}
            alt=''
            className='myStoreContainer_skills--icon'
          />
        </div>

        <a
          href='https://github.com/MiriamPaternain/DoLister'
          target='_blank'
          rel='noreferrer'
          className='myStoreContainer_link'>
          <button className='myStoreContainer_link--btn'>
            <FaGithub className='myStoreContainer_link--icon' /> Github
          </button>
        </a>
        <a
          href='https://do-lister-fy0oxecip-miriampaternains-projects.vercel.app/'
          target='_blank'
          rel='noreferrer'
          className='myStoreContainer_link'>
          <button className='myStoreContainer_link--btn'>
            <TfiWorld className='myStoreContainer_link--icon' /> Link to web
          </button>
        </a>
        <img src={DL1} alt='' className='myStoreContainer_img' />
        <img src={DL2} alt='' className='myStoreContainer_img' />
        <img src={DLS3} alt='' className='myStoreContainer_img' />
      </main>
      <Footer />
    </>
  );
}

export default DoLister;
