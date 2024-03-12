import MyStore from '../../img/MyStore/My-store.png';
import GreenCoffe from '../../img/greenCoffe.png';
import DoLister from '../../img/Do Lister.png';
import bookWiser from '../../img/bookWiser.png';
import { Link } from 'react-router-dom';
import 'animate.css';

function SectionMyProjects() {
  const projects = [
    {
      index: 1,
      img: bookWiser,
      name: 'bookWiser',
      info: 'Web Development and Design',
      link: '/Projects/bookWiser',
    },

    {
      index: 2,
      img: GreenCoffe,
      name: 'The Green Coffe',
      info: 'Brand Identity',
      link: '/Projects/TheGreenCoffe',
    },
    {
      index: 3,
      img: DoLister,
      name: 'Do Lister',
      info: 'Web Development',
      link: '/Projects/DoLister',
    },
    {
      index: 4,
      img: MyStore,
      name: 'My Store',
      info: 'Web Development',
      link: '/Projects/MyStore',
    },
  ];
  return (
    <>
      <main className='sectionMyProjectsContainer'>
        <h1 className='sectionMyProjectsContainer_title'>My PROJECTS</h1>
        {projects.map((projects, index) => (
          <article key={index} className='sectionMyProjectsContainer_article'>
            <div className='sectionMyProjectsContainer_article--block'>
              <img
                src={projects.img}
                alt=''
                className='sectionMyProjectsContainer_article--blockImg'
              />
              <p className='sectionMyProjectsContainer_article--blockName'>
                {projects.name}
              </p>
              <p className='sectionMyProjectsContainer_article--blockInfo'>
                {projects.info}
              </p>
            </div>

            <Link
              to={projects.link}
              className='sectionMyProjectsContainer_article--btnLink'
              target='_blank'
              rel='noreferrer'>
              <button className='sectionMyProjectsContainer_article--btn'>
                see project
              </button>
            </Link>
          </article>
        ))}
      </main>
      <h1 className='animatedContainer_title'>My PROJECTS</h1>
      <div className='animatedContainer'>
        {projects.map((project, index) => (
          <div key={index} className='box'>
            <div className='imgBx'>
              <img src={project.img} alt='img from project' />
            </div>
            <Link to={project.link}>
              <div className='content'>
                <div>
                  <h2 className='sectionMyProjectsContainer_article--blockName'>
                    {project.name}
                  </h2>
                  <p className='sectionMyProjectsContainer_article--blockInfo'>
                    {project.info}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionMyProjects;
