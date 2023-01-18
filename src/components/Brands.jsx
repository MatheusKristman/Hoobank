import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { airbnb, binance, coinbase, dropbox } from '../assets';

const Brands = () => {

  const airbnbVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: -100 },
  };

  const binanceVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.2 } },
    hidden: { opacity: 0, y: -100 },
  };

  const coinbaseVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.4 } },
    hidden: { opacity: 0, y: -100 },
  };

  const dropboxVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.6 } },
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
    <section className='brands wrapper'>
      <div ref={ref} className='brands__container'>
        <motion.img variants={airbnbVariant} initial='hidden' animate={control} src={airbnb} alt='airbnb' />
        <motion.img variants={binanceVariant} initial='hidden' animate={control} src={binance} alt='binance' />
        <motion.img variants={coinbaseVariant} initial='hidden' animate={control} src={coinbase} alt='coinbase' />
        <motion.img variants={dropboxVariant} initial='hidden' animate={control} src={dropbox} alt='coinbase' />
      </div>
    </section>
  )
}

export default Brands;