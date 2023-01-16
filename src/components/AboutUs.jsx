import React from 'react';

import { star, shield, send } from '../assets';

const AboutUs = () => {
  return (
    <section className='about wrapper' id='about'>
      <div className='about__wrapper'>
        <div className='about-info'>
          <h2 className='about-title'>You do the business, we’ll handle the money.</h2>

          <p className='about-desc'>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of
            credit cards on the market.
          </p>

          <button type='button' className='about-btn'>
            Get Started
          </button>
        </div>

        <div className='about-demo'>
          <div className='rewards'>
            <div className='rewards__image'>
              <img src={star} alt='estrela' />
            </div>

            <div className='rewards__info'>
              <h4 className='rewards-title'>Rewards</h4>
              <p className='rewards-desc'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>
          </div>

          <div className='secure'>
            <div className='secure__image'>
              <img src={shield} alt='escudo' />
            </div>

            <div className='secure__info'>
              <h4 className='secure-title'>100% secure</h4>
              <p className='secure-desc'>We take proactive steps make sure your information and transactions are secure.</p>
            </div>
          </div>

          <div className='balance'>
            <div className='balance__image'>
              <img src={send} alt='enviar' />
            </div>

            <div className='balance__info'>
              <h4 className='balance-title'>Balance Transfer</h4>
              <p className='balance-desc'>A balance transfer credit card can save you a lot of money in interest charges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
