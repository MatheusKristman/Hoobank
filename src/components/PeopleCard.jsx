import React from 'react';
import { motion } from 'framer-motion';

const PeopleCard = ({ quote, text, peopleImg, peopleName, peopleJob, cardVariant, control }) => {
  return (
    <motion.div variants={cardVariant} initial='hidden' animate={control} className='testimonial-card'>
      <img src={quote} alt='aspas' className='quotes' />

      <p className='testimonial-text'>{text}</p>

      <div className='people-container'>
        <div className='people-image'>
          <img src={peopleImg} alt='Herman Jensen' />
        </div>

        <div className='people-info'>
          <h4 className='people-name'>{peopleName}</h4>

          <p className='people-job'>{peopleJob}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PeopleCard;
