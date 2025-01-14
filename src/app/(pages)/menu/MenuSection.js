"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MenuSection({ data, i }) {
  const { section, menu, imgs } = data;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["1 1", "1 0"],
  });

  const width = useTransform(scrollYProgress, [0, 1], [200, 350]);

  return (
    <section ref={container} id={section} className="space-y-16">
      <h1 className="text-3xl font-semibold">{section}</h1>
      <div className="space-y-6">
        {menu.map(({ name, des, price }, i) => (
          <div className="grid lg:grid-cols-4" key={i}>
            <h6 className="font-semibold">{name}</h6>
            <p className="text-Gray lg:col-span-2">{des}</p>
            <h6 className="font-semibold text-end">{price}</h6>
          </div>
        ))}
      </div>
      <div
        className={`${
          i % 2 != 0 ? "justify-self-end" : ""
        } flex gap-4 [&>img]:rounded-md`}
      >
        {imgs.map((src, j) => (
          <motion.div style={{ width }} className="max-md:!w-full" key={j}>
            <Image className="w-full rounded-md" src={src} alt="img" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
