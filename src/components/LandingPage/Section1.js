import landing1 from '../../img/landing1.jpg';
import 'animate.css';

function Section1() {
  return (
    <>
      <main className='section1Container'>
        <p className='section1Container_hi'>¡Hola!</p>
        <p className='section1Container_me'>
          Soy Miriam, <br />
          una apasionada diseñadora y desarrolladora web afincada en Madrid.
        </p>

        <img src={landing1} alt='' className='section1Container_img' />
      </main>
    </>
  );
}

export default Section1;
