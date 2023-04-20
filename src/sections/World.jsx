import { motion } from 'framer-motion';
import people1 from './public/people-01.png'
import people2 from './public/people-02.png'
import people3 from './public/people-03.png'
import map from './public/map.png';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src={map} alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-15 right-25 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={people1} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-40 right-20 left-50 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={people2} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={people3} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;