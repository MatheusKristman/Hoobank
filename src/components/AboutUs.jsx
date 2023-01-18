import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { star, shield, send } from '../assets';

const AboutUs = () => {

  const titleVariant = { 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    hidden: { opacity: 0, x: -100 },
  }

  const textVariant = { 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
    hidden: { opacity: 0, x: -100 },
  }

  const buttonVariant = { 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' } },
    hidden: { opacity: 0, x: -100 },
  }

  const cardVariant1 = { 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    hidden: { opacity: 0, x: 100 },
  }

  const cardVariant2 = { 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
    hidden: { opacity: 0, x: 100 },
  }

  const cardVariant3 = { 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' } },
    hidden: { opacity: 0, x: 100 },
  }

  

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    function activateOnView() {
      if (inView) {
        control.start('visible');
      }
    }

    activateOnView();
  }, [control, inView]);

  return (
    <section ref={ref} className='about wrapper' id='about'>
      <div className='about__wrapper'>
        <div className='about-info'>
          <motion.h2 variants={titleVariant} initial='hidden' animate={control} className='about-title'>You do the business, we’ll handle the money.</motion.h2>

          <motion.p variants={textVariant} initial='hidden' animate={control} className='about-desc'>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of
            credit cards on the market.
          </motion.p>

          <motion.button variants={buttonVariant} initial='hidden' animate={control} type='button' className='about-btn'>
            Get Started
          </motion.button>
        </div>

        <div className='about-demo'>
          <motion.div variants={cardVariant1} initial='hidden' animate={control} className='rewards'>
            <div className='rewards__image'>
              <img src={star} alt='estrela' />
            </div>

            <div className='rewards__info'>
              <h4 className='rewards-title'>Rewards</h4>
              <p className='rewards-desc'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>
          </motion.div>

          <motion.div variants={cardVariant2} initial='hidden' animate={control} className='secure'>
            <div className='secure__image'>
              <img src={shield} alt='escudo' />
            </div>

            <div className='secure__info'>
              <h4 className='secure-title'>100% secure</h4>
              <p className='secure-desc'>We take proactive steps make sure your information and transactions are secure.</p>
            </div>
          </motion.div>

          <motion.div variants={cardVariant3} initial='hidden' animate={control} className='balance'>
            <div className='balance__image'>
              <img src={send} alt='enviar' />
            </div>

            <div className='balance__info'>
              <h4 className='balance-title'>Balance Transfer</h4>
              <p className='balance-desc'>A balance transfer credit card can save you a lot of money in interest charges.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
