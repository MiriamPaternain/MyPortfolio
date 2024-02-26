import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import SectionMyProjects from './SectionMyProjects';
import Nav from '../Nav';
import Footer from '../Footer';

function LandingPage() {
  return (
    <>
      <main>
        <Nav />
        <Section1 />
        <Section2 />
        <Section3 />
        <SectionMyProjects />
        <Footer />
      </main>
    </>
  );
}
export default LandingPage;
