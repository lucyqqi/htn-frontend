/**
 * generates animation variants for text elements with an optional delay
 * @param {number} delay - how long before the animation starts
 * @returns {object} framer motion variants for animating text visibility
 */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

/**
 * creates a fade-in animation from a specific direction
 * @param {string} direction - the initial direction of the element ('left', 'right', 'up', 'down')
 * @param {string} type - the type of transition (e.g., 'spring')
 * @param {number} delay - the delay before the animation starts
 * @param {number} duration - how long the animation takes
 * @returns {object} framer motion variants for a fade-in effect
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * defines a zoom-in animation with optional delay and duration
 * @param {number} delay - the delay before the animation starts
 * @param {number} duration - how long the animation takes
 * @returns {object} framer motion variants for a zoom-in effect
 */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * creates a slide-in animation from a specified direction.
 * @param {string} direction - the initial direction of the slide ('left', 'right', 'up', 'down')
 * @param {string} type - the type of transition (e.g., 'tween').
 * @param {number} delay - the delay before the animation starts
 * @param {number} duration - how long the animation takes
 * @returns {object} framer motion variants for sliding elements into view
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * stagger animation for container elements, affecting child animation delays
 * @param {number} staggerChildren - the delay between each child's animation
 * @param {number} delayChildren - an initial delay before starting the children's animations
 * @returns {object} framer motion variants to stagger child animations in a container
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
