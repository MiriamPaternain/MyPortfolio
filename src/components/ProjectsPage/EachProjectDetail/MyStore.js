import Footer from '../../Footer';
import Nav from '../../Nav';
import underconstruction from '../../../img/underConstruction.jpg';

function MyStore() {
  return (
    <>
      <Nav />
      <main className='myStoreContainer'>
        <p className='myStoreContainer_title'></p>
        <p className='myStoreContainer_resume'></p>
        <div className='myStoreContainer_skills'></div>
        <button className='myStoreContainer_btn'></button>
        <button className='myStoreContainer_btn'></button>
        <img src='' alt='' className='myStoreContainer_img' />
        <img src='' alt='' className='myStoreContainer_img' />
        <img src='' alt='' className='myStoreContainer_img' />
      </main>
      <Footer />
    </>
  );
}

export default MyStore;
