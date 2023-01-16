import React from 'react';

const PeopleCard = ({ quote, text, peopleImg, peopleName, peopleJob }) => {
  return (
    <div className='testimonial-card'>
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
    </div>
  );
};

export default PeopleCard;
