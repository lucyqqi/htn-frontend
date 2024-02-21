import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLogin } from '../LoginContext.jsx';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// eventcard component displays details for a single event
const EventCard = ({ name, link, description, related_events, allEvents, start_time }) => {
  // generates a list of names for related events
  const getRelatedEventNames = () => {
    return related_events.map(eventId => {
      const relatedEvent = allEvents.find(event => event.id === eventId);
      // filters out any events that could not be found
      return relatedEvent ? relatedEvent.name : null;
    }).filter(eventName => eventName !== null);
  };

  return (
    <motion.div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <h3 style={{ fontSize: '30px' }} className={`${styles.heroHeadText}`}>
          <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
        </h3>
        <p>{description}</p>  
        <br></br>
        <p>Related Events: {getRelatedEventNames().join(', ')}</p>
      </div>
    </motion.div>
  );
};

// about component serves as the main page for event listings
const About = () => {
  const { isLoggedIn } = useLogin();
  const [events, setEvents] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [sortByTime, setSortByTime] = useState(false);

  // fetches event data from an API and filters based on login status
  useEffect(() => {
    fetch('https://api.hackthenorth.com/v3/events')
      .then(response => response.json())
      .then(data => {
        const filteredEvents = isLoggedIn ? data : data.filter(event => event.permission !== 'private');
        setEvents(filteredEvents);
      });
  }, [isLoggedIn]);

  // toggles event sorting between chronological and default order
  const handleSortByTimeClick = () => {
    setSortByTime(!sortByTime);
  };

  // sorts events based on the selected criteria
  useEffect(() => {
    const sortedEvents = sortByTime 
      ? [...events].sort((a, b) => new Date(a.start_time) - new Date(b.start_time)) 
      : [...events];
    setSorted(sortedEvents);
  }, [sortByTime, events]);

  return (
    <>
      <motion.div>
        
        <p className={styles.sectionSubText}>ARE YOU READY?</p>
        <h2 className={styles.sectionHeadText}>Canada's Largest Hackathon.</h2>
      </motion.div>

     
      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'>
        This September, join 1,000+ hackers from all around the world for a hackathon like no other.
        Discover a community of like-minded hackers, connect with world-class mentors, and build because you love to build.
      </motion.p>

      <motion.button
        onClick={handleSortByTimeClick}
        className="bg-cyanblue text-white rounded-md px-6 py-3 mb-4 block mx-auto"
        style={{ backgroundColor: '#008b8b' }}
      >
        {sortByTime ? "Show Default Order" : "Sort By Time"}
      </motion.button>

   
      <div className='mt-20 flex flex-wrap gap-10'>
        {sorted.map((event) => (
          <EventCard
            key={event.id}
            link={event.public_url}
            name={event.name}
            description={event.description}
            related_events={event.related_events}
            allEvents={sorted} // ensures related event logic reflects current sorting
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
