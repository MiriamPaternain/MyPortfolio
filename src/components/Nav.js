import { RxHamburgerMenu } from 'react-icons/rx';
import LogoWhite from '../img/logoWhite.png';
import { useState } from 'react';
function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <div className='navContainer'>
        <img src={LogoWhite} alt='white logo' className='navContainer_logo' />
        <button className='navContainer_menuBtn' onClick={toggleMenu}>
          <RxHamburgerMenu className='hamburger-menu-icon' />
        </button>
        <ul className='navContainer_menu hide'>
          <li className='navContainer_menu--names'>
            <a
              className='navContainer_menu--link'
              href='./LandingPage/LandingPage.js'>
              Home
            </a>
          </li>
          <li className='navContainer_menu--names'>
            <a className='navContainer_menu--link' href=''>
              About
            </a>
          </li>
          <li className='navContainer_menu--names'>
            <a className='navContainer_menu--link' href=''>
              Projects
            </a>
          </li>
          <li className='navContainer_menu--names'>
            <a className='navContainer_menu--link' href=''>
              Contact
            </a>
          </li>
        </ul>
        {openMenu && (
          <div className='openMenu'>
            <button className='openMenu_closeMenuBtn' onClick={closeMenu}>
              X
            </button>
            <ul className='openMenu_list'>
              <li className='openMenu_list--names'>
                <a
                  className='openMenu_list--link'
                  href='./LandingPage/LandingPage.js'>
                  | Home
                </a>
              </li>
              <li className='openMenu_list--names'>
                <a className='openMenu_list--link' href=''>
                  | About
                </a>
              </li>
              <li className='openMenu_list--names'>
                <a className='openMenu_list--link' href=''>
                  | Projects
                </a>
              </li>
              <li className='openMenu_list--names'>
                <a className='openMenu_list--link' href=''>
                  | Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
