import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

type Project = {
  title: string;
  capital: string;
  capacity: string;
  date: string;
  image: string;
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-premium hover:shadow-premium-hover transition-all duration-500"
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-brand-dark/40 transition-colors group-hover:bg-brand-dark/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90" />

    <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-brand-accent group-hover:text-brand-dark group-hover:border-brand-accent transition-all duration-300 z-20">
      <ArrowRight
        size={24}
        className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
      />
    </div>

    <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <div className="bg-brand-primary/90 w-fit px-3 py-1 rounded text-xs font-bold text-white mb-4 backdrop-blur-sm font-sans">
        SOLAR GRID
      </div>
      <h3 className="text-3xl font-bold text-white mb-6 leading-tight font-sans">
        {project.title}
      </h3>

      <div className="grid grid-cols-1 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <div className="flex items-center gap-3 text-gray-200 text-sm border-t border-white/10 pt-3 font-sans">
          <Briefcase size={16} className="text-brand-accent" />
          <span>{project.capital}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-200 text-sm border-t border-white/10 pt-3 font-sans">
          <Zap size={16} className="text-brand-accent" />
          <span>{project.capacity}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-200 text-sm border-t border-white/10 pt-3 font-sans">
          <div className="text-brand-accent font-bold">Close:</div>
          <span>{project.date}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Darway Coast, Nigeria',
      capital: '₦800m Private Capital',
      capacity: '526KW Capacity',
      date: 'Sep 2022',
      image:
        'https://images.unsplash.com/photo-1723133371535-1412bc2e412e?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Prado Power Energy',
      capital: '₦1.95bn Private Capital',
      capacity: '850kW Capacity',
      date: 'Oct 2024',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Hotspot Network',
      capital: '₦955m Private Capital',
      capacity: '324KW Capacity',
      date: 'Jun 2023',
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-brand-dark text-white relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <SectionHeading
              sub="Project Showcase"
              title="Leading with innovation in solar projects worldwide"
              dark
            />
          </div>
          <button className="hidden md:flex items-center gap-2 border-b border-brand-accent pb-1 text-brand-accent font-bold hover:text-white hover:border-white transition-colors font-sans">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


