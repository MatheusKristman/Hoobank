import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Solution = () => {

  const solutionVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: 200 },
  };

  const titleVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 1 } },
    hidden: { opacity: 0, x: -50 },
  };

  const textVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 1.2 } },
    hidden: { opacity: 0, x: -50 },
  };

  const buttonVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.6, ease: 'easeOut', delay: 1 } },
    hidden: { opacity: 0, x: 50 },
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
    <section ref={ref} className='solution wrapper' id='solution'>
      <motion.div variants={solutionVariant} initial='hidden' animate={control} className='solution__container'>
        <div className='solution-info'>
          <motion.h2 variants={titleVariant} initial='hidden' animate={control} className='solution-title'>Let's try our sevice now!</motion.h2>

          <motion.p variants={textVariant} initial='hidden' animate={control} className='solution-desc'>Everything you need to accept card payments and grow your business anywhere on the planet.</motion.p>
        </div>

        <motion.button variants={buttonVariant} initial='hidden' animate={control} type='button' className='solution-btn'>Get Started</motion.button>
      </motion.div>
    </section>
  )
}

export default Solution;