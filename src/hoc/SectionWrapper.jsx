import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/**
 * a higher-order component that wraps a given component with a motion section
 * for applying animations and styles uniformly. it also inserts a span for anchor id linking.
 * @param {React.Component} Component - the component to be wrapped.
 * @param {string} idName - the id to be assigned to the span for anchor linking.
 * @returns {Function} a react component that renders the passed component within a styled and animated section.
 */
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // applies staggered animation from the utils
        initial='hidden' // initial state before the component comes into view
        whileInView='show' // animation state when the component is in view
        viewport={{ once: true, amount: 0.25 }} // ensures animation plays once when 25% of the element is in view
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        // empty span with an id for anchor linking purposes
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        // renders the passed component
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
