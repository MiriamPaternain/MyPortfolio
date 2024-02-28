import Footer from './Footer';
import Nav from './Nav';
import introImg from '../img/yo.JPG';

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
          <p className='aboutContainer_skills--text'>Skills</p>
          <div className='aboutContainer_skills-designIcons'>
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
          </div>
          <div className='aboutContainer_skills-developmentIcons'>
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
            <img src='' alt='' className='' />
          </div>
        </section>
        <section className='aboutContainer_softSkills'>
          <p className='aboutContainer_softSkills--title'>Soft Skills</p>
          <ul className='aboutContainer_softSkills--list'>
            <li>Problem solving.</li>
            <li>Critical thinking.</li>
            <li>Creativity.</li>
            <li>Empathy.</li>
            <li>Collaboration.</li>
            <li>Organized.</li>
            <li>Time management.</li>
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
