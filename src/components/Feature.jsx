import React from 'react';

const Feature = ({ image, title, desc, apple, google, btn }) => {
  return (
    <div className='feature-wrapper'>
      <div className='feature-image'>
        <img src={image} alt="ilustração" />
      </div>

      <div className='feature-info'>
        <h4 className='feature-title'>{title}</h4>
        <p className='feature-desc'>{desc}</p>

        {btn ? (
          <button className='feature-btn' type='button'>Get Started</button>
        ) : (
          <div className='feature-link-wrapper'>
            <img src={apple} alt='app store' className='apple' />
            <img src={google} alt='google play' className='google' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Feature;