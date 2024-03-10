import { IoLogoBehance } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

function Section3() {
  return (
    <>
      <div className='section3Container'>
        <a
          className='section3Container_btn--link'
          href='https://github.com/MiriamPaternain'
          target='_blank'
          rel='noreferrer'>
          {' '}
          <button className='section3Container_btn'>
            <FaGithub className='section3Container_btn--icon' />
            Github
          </button>
        </a>

        <a
          className='section3Container_btn--link'
          href='https://www.behance.net/miriampaternin'
          target='_blank'
          rel='noreferrer'>
          <button className='section3Container_btn'>
            <IoLogoBehance className='section3Container_btn--icon' />
            Behance{' '}
          </button>
        </a>
      </div>
    </>
  );
}

export default Section3;
