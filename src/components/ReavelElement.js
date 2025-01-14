"use client";
import { motion } from "framer-motion";
import { Children } from "react";
import { useInView } from "react-intersection-observer";

export default function ReavelElement(props) {
  const {
    children,
    init,
    animate,
    transition,
    x = "0%",
    y = 0,
    ...rest
  } = props;

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <>
      {Children.map(children, (child, i) => (
        <motion.div
          ref={ref}
          className="overflow-hidden"
          key={i}
          initial={{
            opacity: 0,
            x,
            y,
            ...init,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            x: inView ? "0%" : x,
            y: inView ? 0 : y,
            ...animate,
          }}
          transition={{ duration: 0.5, ...transition }}
          {...rest}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
