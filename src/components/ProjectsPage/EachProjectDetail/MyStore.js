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

function MyStore() {
  return (
    <>
      <Nav />
      <main className='myStoreContainer'>
        <p className='myStoreContainer_title'>My Store</p>
        <p className='myStoreContainer_resume'>
          It is a shopping web application. I have used a fake API to simulate
          the products. Users can filter products by categories and add them to
          the shopping cart. Each product has its own sheet with details.
        </p>
        <p className='myStoreContainer_skillsTitle'>Skills</p>
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

        <button className='myStoreContainer_btn'>
          <FaGithub className='myStoreContainer_btn--icon' /> Github
        </button>
        <button className='myStoreContainer_btn'>
          <TfiWorld className='myStoreContainer_btn--icon' /> Link to web
        </button>
        <img src='' alt='' className='myStoreContainer_img' />
        <img src='' alt='' className='myStoreContainer_img' />
        <img src='' alt='' className='myStoreContainer_img' />
      </main>
      <Footer />
    </>
  );
}

export default MyStore;
