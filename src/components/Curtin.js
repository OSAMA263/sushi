"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Curtin({ className, y=0, x = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.6,triggerOnce:true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0, x: 0 }}
      animate={{ y: inView ? y : 0, x: inView ? x : 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className={`${className} absolute z-10 w-full h-full bg-white`}
    ></motion.div>
  );
}
