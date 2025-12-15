import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const LatestNews: React.FC = () => {
  const newsItems = [
    {
      tag: 'Press Release',
      date: '24 Oct 2024',
      title:
        'Climate Finance Blending Facility announces strategic partnership with InfraCredit to scale green bonds',
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    },
    {
      tag: 'Transaction',
      date: '15 Sep 2024',
      title:
        'Reaching 1 Million lives: Facility closes deal for 10MW off-grid solar expansion in Kano State',
      image:
        'https://images.unsplash.com/photo-1721137532012-ff8615f1ee8f?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      tag: 'Milestone',
      date: '02 Aug 2024',
      title:
        'FCDO commits additional £5M funding to accelerate clean energy access across West Africa',
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <section
      id="news"
      className="py-32 bg-white relative z-10 border-t border-gray-100"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <SectionHeading sub="Media Center" title="Latest News & Updates" />
          <button className="hidden md:flex items-center gap-2 border-b border-brand-accent pb-1 text-brand-dark font-bold hover:text-brand-primary transition-colors font-sans">
            View All News <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden rounded-2xl mb-6 shadow-sm border border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-bold text-brand-primary uppercase tracking-wider shadow-sm flex items-center gap-2 font-sans">
                  <Tag size={12} className="text-brand-accent" />
                  {item.tag}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="text-gray-400 text-sm font-medium mb-3 flex items-center gap-2 font-sans">
                  <Calendar size={14} className="text-brand-accent" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-snug font-sans">
                  {item.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center gap-2 text-brand-accent font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all font-sans">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <button className="flex items-center gap-2 border-b border-brand-accent pb-1 text-brand-dark font-bold hover:text-brand-primary transition-colors font-sans">
            View All News <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;


