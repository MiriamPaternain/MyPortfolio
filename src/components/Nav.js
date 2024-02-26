import { RxHamburgerMenu } from 'react-icons/rx';
import LogoWhite from '../img/logoWhite.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link className='navContainer_menu--link' to='/'>
              Home
            </Link>
          </li>
          <li className='navContainer_menu--names'>
            <Link className='navContainer_menu--link' to='/About'>
              About
            </Link>
          </li>
          <li className='navContainer_menu--names'>
            <Link className='navContainer_menu--link' to='/Projects'>
              Projects
            </Link>
          </li>
          <li className='navContainer_menu--names'>
            <Link className='navContainer_menu--link' to='/Contact'>
              Contact
            </Link>
          </li>
        </ul>
        {openMenu && (
          <div className='openMenu'>
            <button className='openMenu_closeMenuBtn' onClick={closeMenu}>
              X
            </button>
            <ul className='openMenu_list'>
              <li className='openMenu_list--names'>
                <Link className='openMenu_list--link' to='/'>
                  | Home
                </Link>
              </li>
              <li className='openMenu_list--names'>
                <Link className='openMenu_list--link' to='/About'>
                  | About
                </Link>
              </li>
              <li className='openMenu_list--names'>
                <Link className='openMenu_list--link' to='/Projects'>
                  | Projects
                </Link>
              </li>
              <li className='openMenu_list--names'>
                <Link className='openMenu_list--link' to='/Contact'>
                  | Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
