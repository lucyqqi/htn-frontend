import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLogin } from '../LoginContext.jsx'; // Assuming this is correctly imported

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EventCard = ({ index, name, link, description, related_events, allEvents }) => {
  // Function to get the name of the related events
  const getRelatedEventNames = () => {
    return related_events.map(eventId => {
      const relatedEvent = allEvents.find(event => event.id === eventId);
      return relatedEvent ? relatedEvent.name : null;
    }).filter(eventName => eventName !== null); // Filter out null values
  };

  return (
    <motion.div
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h3 style={{ fontSize: '30px' }} className={`${styles.heroHeadText}`}><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></h3>
        <p>{description}</p>
        <br />
        <p>Related Events: {getRelatedEventNames().join(', ')}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { isLoggedIn } = useLogin();
  const [events, setEvents] = useState([]);
  const [sortedTime, setSortedTime] = useState([]); // State variable to track sorting by time

  useEffect(() => {
    fetch('https://api.hackthenorth.com/v3/events')
      .then(response => response.json())
      .then(data => {
        // If not logged in, filter out private events
        const filteredEvents = isLoggedIn 
          ? data 
          : data.filter(event => event.permission !== 'private');
        const sortedEvents = filteredEvents.sort((a, b) => a.start_time - b.start_time);
        setEvents(sortedEvents);
      });
  }, [isLoggedIn]); // Depend on isLoggedIn to refetch when it changes

  // Function to sort events by start time
const sortByTime = () => {
  const sortedEvents = [...events].sort((a, b) => {
    return a.start_time - b.start_time;
  });
  setEvents(sortedEvents);
};


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

        <br /><br />

        Check out our events:
      </motion.p>

    
      <div className='mt-20 flex flex-wrap gap-10'>
        {events.map((event, index) => (
          <EventCard
            link={event.public_url}
            key={event.id}
            index={index}
            name={event.name}
            description={event.description}
            related_events={event.related_events}
            allEvents={events} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
