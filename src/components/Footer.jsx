import React from 'react';

import { logo, mkLogo } from '../assets';

const Footer = () => {
  return (
    <footer className='footer wrapper'>
      <div className='footer__container'>
        <div className='footer-wrapper'>
          <div className='logo-phrase-box'>
            <div className='logo'>
              <img src={logo} alt='HooBank' />
            </div>

            <span className='phrase'>A new way to make the payments easy, reliable and secure.</span>
          </div>

          <div className='usefull-links-box'>
            <h6 className='usefull-links-title'>Usefull Links</h6>

            <ul className='usefull-links-list'>
              <li className='usefull-links-link'>Content</li>
              <li className='usefull-links-link'>How it Works</li>
              <li className='usefull-links-link'>Create</li>
              <li className='usefull-links-link'>Explore</li>
              <li className='usefull-links-link'>Terms & Services</li>
            </ul>
          </div>

          <div className='community-box'>
            <h6 className='community-title'>Community</h6>

            <ul className='community-list'>
              <li className='community-link'>Help Center</li>
              <li className='community-link'>Partners</li>
              <li className='community-link'>Suggestions</li>
              <li className='community-link'>Blog</li>
              <li className='community-link'>Newsletters</li>
            </ul>
          </div>

          <div className='partner-box'>
            <h6 className='partner-title'>Partner</h6>

            <ul className='partner-list'>
              <li className='partner-link'>Our Partner</li>
              <li className='partner-link'>Become a Partner</li>
            </ul>
          </div>
        </div>

        <div className='dev-box'>
          <div className='dev-logo'>
            <a href="https://portfolio-2-0-iota-henna.vercel.app/" target='_blank' rel='noreferrer noopener'>
              <img src={mkLogo} alt='Matheus Kristman Dev' />
            </a>
            <span>Copyright © 2021 HooBank. All Rights Reserved.</span>
          </div>

          <ul className='socials-wrapper'>
            <li>
              <a href="https://www.linkedin.com/in/matheus-kristman/" target='_blank' rel='noreferrer noopener' className='linkedin'>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tinzin.exe/" target='_blank' rel='noreferrer noopener' className='instagram'>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/MatheusKristman" target='_blank' rel='noreferrer noopener' className='github'>
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;