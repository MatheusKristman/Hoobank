import React from 'react';
import PeopleCard from './PeopleCard';

import { quotes, people01, people02, people03 } from '../assets';

const Testimonials = () => {
  return (
    <section className='testimonials wrapper'>
      <div className='testimonials__container'>
        <div className='testimonials-header'>
          <h2 className='testimonials-title'>What people are saying about us</h2>

          <p className='testimonials-desc'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className='testimonials-wrapper'>          
          <PeopleCard
            quote={quotes}
            text='Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.'
            peopleImg={people01}
            peopleName='Herman Jensen'
            peopleJob='Founder & Leader'
          />

          <PeopleCard
            quote={quotes}
            text="Money makes your life easier. If you're lucky to have it, you're lucky."
            peopleImg={people02}
            peopleName='Steve Mark'
            peopleJob='Founder & Leader'
          />

          <PeopleCard
            quote={quotes}
            text='It is usually people in the money business, finance, and international trade that are really rich.'
            peopleImg={people03}
            peopleName='Kenn Gallagher'
            peopleJob='Founder & Leader'
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
