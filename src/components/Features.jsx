import React from 'react';
import Feature from './Feature';

import { apple, google, bill, card } from '../assets';

const Features = () => {
  return (
    <section className='features wrapper' id='features'>
      <div className='features__container'>
        <Feature
          image={bill}
          title='Easily control your billing & invoicing.'
          desc='Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.'
          btn={false}
          apple={apple}
          google={google}
        />
        <Feature
          image={card}
          title='Find a better card deal in few easy steps.'
          desc='Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.'
          btn={true}
        />
      </div>
    </section>
  );
};

export default Features;
