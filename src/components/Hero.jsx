import React, { useEffect } from 'react';
import Header from './Header';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { discount, arrowUp, robot } from '../assets';

const Hero = () => {

  const discountVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: -50 },
  };

  const titleVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.5 } },
    hidden: { opacity: 0, x: -50 },
  };

  const textVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 1 } },
    hidden: { opacity: 0, y: 50 },
  };

  const ctaVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 1.5 } },
    hidden: { opacity: 0, y: -50 },
  };

  const imageVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeInOut', } },
    hidden: { opacity: 0, x: 300 },
  };

  const dataVariant1 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: -50 },
  };

  const dataVariant2 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.5 } },
    hidden: { opacity: 0, y: -50 },
  };

  const dataVariant3 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 1 } },
    hidden: { opacity: 0, y: -50 },
  };

  const control = useAnimation();
  const control2 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    function activateOnView() {
      if (inView) {
        control.start('visible');
      }

      if (inView2) {
        control2.start('visible');
      }
    }

    activateOnView();
  }, [control, control2, inView, inView2]);

  return (
    <div className='hero-bg'>
      <Header />

      <main ref={ref} className='hero' id='home'>
        <div className='hero__wrapper'>
          <div className='hero-info'>
            <motion.div variants={discountVariant} initial='hidden' animate={control} className='discount-container'>
              <img src={discount} />

              <span className='discount-text'>
                <strong>20%</strong> discount for <strong>1 month</strong> account
              </span>
            </motion.div>

            <div className='info-wrapper'>
              <motion.h1 variants={titleVariant} initial='hidden' animate={control} className='info-title'>
                The Next <strong>Generation</strong>
              </motion.h1>

              <motion.div variants={ctaVariant} initial='hidden' animate={control} className='cta-outer-bg'>
                <div className='cta-inner-bg'>
                  <div className='top-text'>
                    <p className='cta-text'>Get</p>
                    <div className='arrow-container'>
                      <img src={arrowUp} alt='Seta' className='arrow' />
                    </div>
                  </div>
                  <p className='cta-text'>Started</p>
                </div>
              </motion.div>
            </div>
            <motion.h1 variants={titleVariant} initial='hidden' animate={control} className='info-title'>Payment Method.</motion.h1>

            <motion.p variants={textVariant} initial='hidden' animate={control} className='info-desc'>
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates,
              annual fees.
            </motion.p>
          </div>

          <motion.div variants={imageVariant} initial='hidden' animate={control} className='hero-image'>
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
          </motion.div>
        </div>

        <div ref={ref2} className='datas-container'>
          <div className='datas-wrapper'>
            <motion.div variants={dataVariant1} initial='hidden' animate={control2} className='user-active'>
              <h4>3800+</h4>
              <span>user active</span>
            </motion.div>

            <div className='data-line' />

            <motion.div variants={dataVariant2} initial='hidden' animate={control2} className='trusted-company'>
              <h4>230+</h4>
              <span>trusted by company</span>
            </motion.div>

            <div className='data-line' />

            <motion.div variants={dataVariant3} initial='hidden' animate={control2} className='transaction'>
              <h4>$230M+</h4>
              <span>transaction</span>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
