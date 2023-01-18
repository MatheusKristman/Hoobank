import React, { useEffect } from 'react';
import Feature from './Feature';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { apple, google, bill, card } from '../assets';

const Features = () => {

  const imageVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: -100 },
  };

  const titleVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: 100 },
  };

  const textVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: 100 },
  };

  const buttonVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: 100 },
  };

  const control = useAnimation();
  const control2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    function animateOnView() {
      if (inView) {
        control.start('visible');
      }

      if (inView2) {
        control2.start('visible');
      }
    }

    animateOnView();
  }, [control, control2, inView, inView2]);
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
          reference={ref}
          control={control}
          imageVariant={imageVariant}
          titleVariant={titleVariant}
          textVariant={textVariant}
          buttonVariant={buttonVariant}
        />
        <Feature
          image={card}
          title='Find a better card deal in few easy steps.'
          desc='Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.'
          btn={true}
          reference={ref2}
          control={control2}
          imageVariant={imageVariant}
          titleVariant={titleVariant}
          textVariant={textVariant}
          buttonVariant={buttonVariant}
        />
      </div>
    </section>
  );
};

export default Features;
