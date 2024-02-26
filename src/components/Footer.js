import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <ul className='footerContainer_list'>
          <Link to='/' className='footerContainer_list--link'>
            <li>Home</li>
          </Link>
          <Link className='footerContainer_list--link' to='/About'>
            <li>About</li>
          </Link>
          <Link className='footerContainer_list--link' to='/Projects'>
            <li>Projects</li>
          </Link>
          <Link className='footerContainer_list--link' to='/Contact'>
            <li>Contact</li>
          </Link>
        </ul>
        <p className='footerContainer_phrase'>Thanks for watching!</p>
        <p className='footerContainer_phrase'>
          Designed and developed by Miriam Paternáin{' '}
          <FaRegHeart className='footerContainer_phrase--heartIcon' /> 2024
        </p>
      </div>
    </>
  );
}

export default Footer;
