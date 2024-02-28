import Footer from './Footer';
import Nav from './Nav';
import introImg from '../img/yo.JPG';
import illustrator from '../img/ilustrador.png';
import photoshop from '../img/photoshop.png';
import indesign from '../img/indesign.png';
import figma from '../img/figma.png';
import uxUi from '../img/ux:ui.png';
import html from '../img/html-5.png';
import css from '../img/css-3.png';
import js from '../img/js.png';
import react from '../img/react.png';
import node from '../img/node.png';
import git from '../img/git.png';
import terminal from '../img/terminal.png';
import { VscDebugBreakpointLog } from 'react-icons/vsc';

function About() {
  return (
    <>
      <Nav />
      <div className='aboutContainer'>
        <section className='aboutContainer_intro'>
          <img src={introImg} alt='' className='aboutContainer_intro--img' />
          <p className='aboutContainer_intro--text'>
            Hi! I'm Miriam, a curious human. My motto is keep swimming no matter
            what problems arise along the way. My goal: always continue learning
            to improve my own version
          </p>
        </section>
        <section className='aboutContainer_skills'>
          <div className='aboutContainer_skills--line'></div>
          <p className='aboutContainer_skills--title'>Skills</p>
          <div className='aboutContainer_skills--designIcons'>
            <img className='icon' src={illustrator} alt='illustrator icon' />
            <img src={photoshop} alt='photoshop icon' className='icon' />
            <img src={indesign} alt='indesign icon' className='icon' />
            <img src={figma} alt='figma icon' className='icon' />
            <img src={uxUi} alt='uxui icon' className='icon' />
          </div>
          <div className='aboutContainer_skills--separateLine'>
            <VscDebugBreakpointLog className='breakPoint' />
          </div>

          <div className='aboutContainer_skills--developmentIcons'>
            <img src={html} alt='html icon' className='icon' />
            <img src={css} alt='css icon' className='icon' />
            <img src={js} alt='javascript icon' className='icon' />
            <img src={react} alt='react icon' className='icon' />
            <img src={node} alt='node js icon' className='icon' />
            <img src={git} alt='git icon' className='icon' />
            <img src={terminal} alt='terminal icon' className='icon' />
          </div>
        </section>
        <section className='aboutContainer_softSkills'>
          <div className='aboutContainer_skills--line'></div>
          <p className='aboutContainer_softSkills--title'>Soft Skills</p>
          <ul className='aboutContainer_softSkills--list'>
            <li className='li'>Problem solving.</li>
            <li className='li'>Critical thinking.</li>
            <li className='li'>Creativity.</li>
            <li className='li'>Empathy.</li>
            <li className='li'>Collaboration.</li>
            <li className='li'>Organized.</li>
            <li className='li'>Time management.</li>
          </ul>
        </section>
        <section className='aboutContainer_languages'>
          <ul className='aboutContainer_languages--list'>
            <li>English - Advance</li>
            <li>Spanish - Native</li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default About;
