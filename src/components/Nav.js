import { RxHamburgerMenu } from 'react-icons/rx';

function Nav() {
  return (
    <>
      <div className='navContainer'>
        <img
          src='../img/logoWhite.png'
          alt='white logo'
          className='navContainer_logo'
        />
        <button className='navContainer_hamburgerMenu'>
          {RxHamburgerMenu}
        </button>
      </div>
    </>
  );
}

export default Nav;
