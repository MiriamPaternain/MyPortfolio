import { FaRegHeart } from 'react-icons/fa';
function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <ul className='footerContainer_list'>
          <li className='footerContainer_list--link'>Home</li>
          <li className='footerContainer_list--link'>About</li>
          <li className='footerContainer_list--link'>Projects</li>
          <li className='footerContainer_list--link'>Contact</li>
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
