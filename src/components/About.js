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
import { useEffect, useState } from 'react';

function About() {
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
          {/*  <img src={backgroundLoader} alt='loading...' className='loader_img' /> */}
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
          <div className='aboutContainer'>
            <section className='aboutContainer_intro'>
              <img
                src={introImg}
                alt=''
                className='aboutContainer_intro--img'
              />
              <p className='aboutContainer_intro--text'>
                ¡Hola! Soy Miriam y soy curiosa por naturaleza. Siempre estoy
                lista para enfrentar cualquier desafío que se presente en mi
                camino. Mi meta: seguir aprendiendo para mejorar día a día mi
                propia versión.
              </p>
            </section>

            <section className='aboutContainer_skills'>
              <div className='aboutContainer_skills--line'></div>
              <p className='aboutContainer_skills--title'>Skills</p>
              <div className='aboutContainer_skills--designIcons'>
                <img
                  className='icon'
                  src={illustrator}
                  alt='illustrator icon'
                />
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
            <div className='softAndLanguages'>
              <section className='aboutContainer_softSkills'>
                <div className='aboutContainer_skills--line'></div>
                <p className='aboutContainer_softSkills--title'>Soft Skills</p>
                <ul className='aboutContainer_softSkills--list'>
                  <li className='li'>Resolución de problemas.</li>
                  <li className='li'>Pensamiento crítico.</li>
                  <li className='li'>Creatividad.</li>
                  <li className='li'>Empatía.</li>
                  <li className='li'>Colaboración.</li>
                  <li className='li'>Organización.</li>
                  <li className='li'>Gestión del tiempo.</li>
                </ul>
              </section>
              <section className='aboutContainer_languages'>
                <div className='aboutContainer_skills--line  languages'></div>
                <p className='aboutContainer_languages--title'>Idiomas</p>
                <ul className='aboutContainer_languages--list'>
                  <li className='li'>Inglés - Avanzado</li>
                  <li className='li'>Español - Nativo</li>
                </ul>
              </section>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default About;
