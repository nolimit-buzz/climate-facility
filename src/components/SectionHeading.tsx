import React from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  sub: string;
  title: string;
  dark?: boolean;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ sub, title, dark = false }) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <div className={`h-px w-8 ${dark ? 'bg-brand-accent' : 'bg-brand-primary'}`}></div>
      <span
        className={`${
          dark ? 'text-brand-accent' : 'text-brand-primary'
        } text-xs font-bold tracking-[0.2em] uppercase font-sans`}
      >
        {sub}
      </span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-bold ${
        dark ? 'text-white' : 'text-brand-dark'
      } font-sans`}
    >
      {title}
    </motion.h2>
  </div>
);

export default SectionHeading;


