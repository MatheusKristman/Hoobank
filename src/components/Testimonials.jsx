import React, { useEffect } from 'react';
import PeopleCard from './PeopleCard';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { quotes, people01, people02, people03 } from '../assets';

const Testimonials = () => {

  const titleVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    hidden: { opacity: 0, x: -100 },
  };

  const textVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    hidden: { opacity: 0, x: 100 },
  };

  const cardVariant1 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
    hidden: { opacity: 0, y: -100 },
  };

  const cardVariant2 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 1 } },
    hidden: { opacity: 0, y: -100 },
  };

  const cardVariant3 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 1.5 } },
    hidden: { opacity: 0, y: -100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    function animateOnView() {
      if (inView) {
        control.start('visible');
      }
    }

    animateOnView();
  }, [control, inView]);

  return (
    <section className='testimonials wrapper'>
      <div ref={ref} className='testimonials__container'>
        <div className='testimonials-header'>
          <motion.h2 variants={titleVariant} initial='hidden' animate={control} className='testimonials-title'>What people are saying about us</motion.h2>

          <motion.p variants={textVariant} initial='hidden' animate={control} className='testimonials-desc'>Everything you need to accept card payments and grow your business anywhere on the planet.</motion.p>
        </div>

        <div className='testimonials-wrapper'>          
          <PeopleCard
            quote={quotes}
            text='Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.'
            peopleImg={people01}
            peopleName='Herman Jensen'
            peopleJob='Founder & Leader'
            cardVariant={cardVariant1}
            control={control}
          />

          <PeopleCard
            quote={quotes}
            text="Money makes your life easier. If you're lucky to have it, you're lucky."
            peopleImg={people02}
            peopleName='Steve Mark'
            peopleJob='Founder & Leader'
            cardVariant={cardVariant2}
            control={control}
          />

          <PeopleCard
            quote={quotes}
            text='It is usually people in the money business, finance, and international trade that are really rich.'
            peopleImg={people03}
            peopleName='Kenn Gallagher'
            peopleJob='Founder & Leader'
            cardVariant={cardVariant3}
            control={control}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
