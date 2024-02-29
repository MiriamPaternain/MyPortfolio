import Footer from '../../Footer';
import Nav from '../../Nav';
import underconstruction from '../../../img/underConstruction.jpg';

function MyStore() {
  return (
    <>
      <Nav />
      <img src={underconstruction} alt='' className='underConstrucion' />
      <Footer />
    </>
  );
}

export default MyStore;
