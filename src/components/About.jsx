import React from "react";
import { motion } from "framer-motion";
import {useState, useEffect} from "react";

import { styles } from "../styles";
import { images } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, link, description }) => (
  <motion.div
  
  className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
>
  <div
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
  >
   <h3><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></h3>
    <p>{description}</p>
    
  </div>
</motion.div>
);


const About = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://api.hackthenorth.com/v3/events')
      .then(response => response.json())
      .then(data => {
        const sortedEvents = [...data].sort((a, b) => a.start_time - b.start_time);
        setEvents(sortedEvents);
      });
  }, []);

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>ARE YOU READY?</p>
        <h2 className={styles.sectionHeadText}>Canada's Largest Hackathon.</h2>
      </motion.div>

      <motion.p
      
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        This September, join 1,000+ hackers from all around the world for a hackathon like no other. 
        
        Discover a community of like-minded hackers, connect with world-class mentors, and build because you love to build.

        <br></br>
        <br></br>

        Check out our events:
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {events.map((event, index) => (
          <ServiceCard
            link={event.public_url}
            key={event.id} // Use event.id for a unique key
            index={index}
            name={event.name}
            description={event.description}
            
          />
        ))}
      </div>


    
    </>
  );
};

export default SectionWrapper(About, "about");