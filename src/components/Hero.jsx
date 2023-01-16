import React from 'react';
import Header from './Header';

import { discount, arrowUp, robot } from '../assets';

const Hero = () => {
  return (
    <div className='hero-bg'>
      <Header />

      <main className='hero' id='home'>
        <div className='hero__wrapper'>
          <div className='hero-info'>
            <div className='discount-container'>
              <img src={discount} />

              <span className='discount-text'>
                <strong>20%</strong> discount for <strong>1 month</strong> account
              </span>
            </div>

            <div className='info-wrapper'>
              <h1 className='info-title'>
                The Next <strong>Generation</strong>
              </h1>

              <div className='cta-outer-bg'>
                <div className='cta-inner-bg'>
                  <div className='top-text'>
                    <p className='cta-text'>Get</p>
                    <div className='arrow-container'>
                      <img src={arrowUp} alt='Seta' className='arrow' />
                    </div>
                  </div>
                  <p className='cta-text'>Started</p>
                </div>
              </div>
            </div>
            <h1 className='info-title'>Payment Method.</h1>

            <p className='info-desc'>
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates,
              annual fees.
            </p>
          </div>

          <div className='hero-image'>
            <img src={robot} alt="Robô" className='hero-robot' />

            <div className='cta-mobile'>
              <div className='cta-inner-bg'>
                <div className='top-text'>
                  <p className='cta-text'>Get</p>
                  <div className='arrow-container'>
                    <img src={arrowUp} alt='Seta' className='arrow' />
                  </div>
                </div>
                <p className='cta-text'>Started</p>
              </div>
            </div>
          </div>
        </div>

        <div className='datas-container'>
          <div className='datas-wrapper'>
            <div className='user-active'>
              <h4>3800+</h4>
              <span>user active</span>
            </div>

            <div className='data-line' />

            <div className='trusted-company'>
              <h4>230+</h4>
              <span>trusted by company</span>
            </div>

            <div className='data-line' />

            <div className='transaction'>
              <h4>$230M+</h4>
              <span>transaction</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
