import React from 'react';
import { motion } from 'framer-motion';

const Feature = ({
  image,
  title,
  desc,
  apple,
  google,
  btn,
  reference,
  control,
  imageVariant,
  titleVariant,
  textVariant,
  buttonVariant,
}) => {
  return (
    <div ref={reference} className='feature-wrapper'>
      <motion.div variants={imageVariant} initial='hidden' animate={control} className='feature-image'>
        <img src={image} alt='ilustração' />
      </motion.div>

      <div className='feature-info'>
        <motion.h4 variants={titleVariant} initial='hidden' animate={control} className='feature-title'>{title}</motion.h4>
        <motion.p variants={textVariant} initial='hidden' animate={control} className='feature-desc'>{desc}</motion.p>

        {btn ? (
          <motion.button variants={buttonVariant} initial='hidden' animate={control} className='feature-btn' type='button'>
            Get Started
          </motion.button>
        ) : (
          <motion.div variants={buttonVariant} initial='hidden' animate={control} className='feature-link-wrapper'>
            <img src={apple} alt='app store' className='apple' />
            <img src={google} alt='google play' className='google' />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Feature;
