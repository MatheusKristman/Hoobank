import React, { useState } from 'react';

import { logo } from '../assets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className='header wrapper'>
      <div className='header__wrapper'>
        <div className='header-logo'>
          <img src={logo} alt='Logo' className='logo' />
        </div>

        <nav className='nav-container'>
          <button type='button' className='nav-btn' onClick={handleMenu}>
            {isMenuOpen ? <i className='fa-solid fa-xmark'></i> : <i className='fa-solid fa-bars-staggered'></i>}
          </button>

          <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
            <li onClick={closeMenu} className='nav-link'>
              <a href='#home'>Inicio</a>
            </li>
            <li onClick={closeMenu} className='nav-link'>
              <a href='#about'>Sobre</a>
            </li>
            <li onClick={closeMenu} className='nav-link'>
              <a href='#features'>Beneficios</a>
            </li>
            <li onClick={closeMenu} className='nav-link'>
              <a href='#solution'>Solução</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
