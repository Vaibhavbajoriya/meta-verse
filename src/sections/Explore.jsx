import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import world2 from './public/planet-2.jpg'
const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '../src/public/planet-1.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-2',
    imgUrl:'../src/public/planet-2.jpg',
    title: 'The Metropolis',
  },
  {
    id: 'world-3',
    imgUrl: '../src/public/planet-3.jpg',
    title: 'The WonderLand',
  },
  {
    id: 'world-4',
    imgUrl: '../src/public/planet-4.jpg',
    title: 'The Jurassic World',
  },
  {
    id: 'world-5',
    imgUrl: '../src/public/planet-5.jpg',
    title: 'The HogWards',
  },
];

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Realities" textStyles="text-center" />
        <TitleText
          title={<>Choose the World you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;