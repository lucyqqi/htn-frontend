import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

// the hero component for the landing page
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[250px]`}>
        <a href='#home'>
          <div>
           
            <h1 className={`${styles.heroHeadText} text-center text-transparent bg-clip-text bg-gradient-to-r from-lightBlue to-lightPink`}>
              HACK THE NORTH
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-center text-white-100`}>
              September 14-16, 2024 • In-Person Event • MLH Official Member
            </p>
          </div>
        </a>
      </div>

     
      <ComputersCanvas />

      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> 
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0], // animates the dot in a vertical bouncing motion
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' // the bouncing dot
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
