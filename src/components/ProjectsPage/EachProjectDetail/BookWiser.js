import Footer from '../../Footer';
import Nav from '../../Nav';
import html from '../../../img/html-5.png';
import css from '../../../img/css-3.png';
import js from '../../../img/js.png';
import react from '../../../img/react.png';
import node from '../../../img/node.png';
import git from '../../../img/git.png';
import terminal from '../../../img/terminal.png';
import mongo from '../../../img/pngwing.com.png';
import mySQL from '../../../img/mysql_original_wordmark_logo_icon_146417.png';
import illustrator from '../../../img/ilustrador.png';
import figma from '../../../img/figma.png';
import { FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';

function BookWiser() {
  const developIcons = [html, css, js, react, node, mongo, git, terminal];
  const designIcons = [illustrator, figma];

  return (
    <>
      <Nav />
      <main className='myStoreContainer'>
        <p className='myStoreContainer_title'>bookWiser</p>
        <p className='myStoreContainer_resume'>
          Esta web está actualmente en proceso de desarrollo.
        </p>
        <p className='myStoreContainer_skillsTitle'>Skills de desarrollo:</p>
        <div className='myStoreContainer_skills'>
          {developIcons.map((iconDev, index) => (
            <img
              key={index}
              src={iconDev}
              alt=''
              className='myStoreContainer_skills--icon'
            />
          ))}
        </div>
        <p className='myStoreContainer_skillsTitle'>Skills de diseño:</p>
        <div className='myStoreContainer_skills'>
          {designIcons.map((iconDes, index) => (
            <img
              key={index}
              src={iconDes}
              alt=''
              className='myStoreContainer_skills--icon'
            />
          ))}
        </div>

        <a
          href='https://github.com/MiriamPaternain/bookWiser'
          target='_blank'
          rel='noreferrer'
          className='myStoreContainer_link'>
          <button className='myStoreContainer_link--btn'>
            <FaGithub className='myStoreContainer_link--icon' /> Github
          </button>
        </a>
        <a
          href='https://bookwiser.onrender.com'
          target='_blank'
          rel='noreferrer'
          className='myStoreContainer_link'>
          <button className='myStoreContainer_link--btn'>
            <TfiWorld className='myStoreContainer_link--icon' /> Link to web
          </button>
        </a>
        {/* <img src={DL1} alt='' className='myStoreContainer_img' />
        <img src={DL2} alt='' className='myStoreContainer_img' />
        <img src={DLS3} alt='' className='myStoreContainer_img' /> */}
      </main>
      <Footer />
    </>
  );
}

export default BookWiser;
