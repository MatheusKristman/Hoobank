import React from 'react';

import { airbnb, binance, coinbase, dropbox } from '../assets';

const Brands = () => {
  return (
    <section className='brands wrapper'>
      <div className='brands__container'>
        <img src={airbnb} alt='airbnb' />
        <img src={binance} alt='binance' />
        <img src={coinbase} alt='coinbase' />
        <img src={dropbox} alt='coinbase' />
      </div>
    </section>
  )
}

export default Brands;