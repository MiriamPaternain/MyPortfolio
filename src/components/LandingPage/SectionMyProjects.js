import MyStore from '../../img/My-store.png';
import GreenCoffe from '../../img/greenCoffe.png';
import DoLister from '../../img/Do Lister.png';
function SectionMyProjects() {
  const projects = [
    {
      img: { MyStore },
      name: 'My Store',
      info: 'Web Development',
    },
    {
      img: { GreenCoffe },
      name: 'The Green Coffe',
      info: 'Brand Identity',
    },
    {
      img: { DoLister },
      name: 'Do Lister',
      info: 'Web Development',
    },
  ];
  return (
    <>
      <main className='sectionMyProjectsContainer'>
        <title className='sectionMyProjectsContainer_title'>My PROJECTS</title>
        <article>
          <img
            src={projects.img}
            alt=''
            className='sectionMyProjectsContainer_img'
          />
          <div className='sectionMyProjectsContainer_infoBlock'>
            <h1 className='sectionMyProjectsContainer_infoBlock--name'>
              {projects.name}
            </h1>
            <h3 className='sectionMyProjectsContainer_infoBlock--info'>
              {projects.info}
            </h3>
          </div>
        </article>
      </main>
    </>
  );
}

export default SectionMyProjects;
