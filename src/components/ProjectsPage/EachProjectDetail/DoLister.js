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
  const developIcons = [html, css, js, react, git, terminal];
  return (
    <>
      <Nav />
      <main className='myStoreContainer'>
        <p className='myStoreContainer_title'>Do Lister</p>
        <p className='myStoreContainer_resume'>
          DoLister es una aplicación web que te ayuda a organizarte mediante un
          listado de tareas. Cada elemento añadido se puede tachar cuando se
          haya finalizado y también se puede borrar. Además cuenta con un
          buscador que ayuda al usuario a encontrar la tarea que quiere
          modificar de forma rápida.
        </p>
        <p className='myStoreContainer_skillsTitle'>Skills:</p>
        <div className='myStoreContainer_skills'>
          {developIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt=''
              className='myStoreContainer_skills--icon'
            />
          ))}
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
