import MyStore from '../../img/My-store.png';
import GreenCoffe from '../../img/greenCoffe.png';
import DoLister from '../../img/Do Lister.png';

function SectionMyProjects() {
  const projects = [
    {
      index: 1,
      img: MyStore,
      name: 'My Store',
      info: 'Web Development',
      link: 'https://miriampaternain.github.io/My-Store/',
    },
    {
      index: 2,
      img: GreenCoffe,
      name: 'The Green Coffe',
      info: 'Brand Identity',
      link: 'https://www.behance.net/gallery/163462295/The-Green-Coffee-Diseno-de-marca',
    },
    {
      index: 3,
      img: DoLister,
      name: 'Do Lister',
      info: 'Web Development',
      link: 'https://do-lister.vercel.app/',
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

            <a
              href={projects.link}
              className='sectionMyProjectsContainer_article--btnLink'
              target='_blank'
              rel='noreferrer'>
              <button className='sectionMyProjectsContainer_article--btn'>
                see project
              </button>
            </a>
          </article>
        ))}
      </main>
    </>
  );
}

export default SectionMyProjects;
