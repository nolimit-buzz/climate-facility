import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import SectionHeading from './SectionHeading';

const FeaturedStories: React.FC = () => {
  const storyImages = [
    'https://images.unsplash.com/photo-1761047647087-701689b118c3?q=80&w=1276&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <section className="py-32 bg-brand-light">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading sub="Stories" title="Featured Stories" />
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors">
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-primary transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 shadow-premium">
                <img
                  src={storyImages[i]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Story"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Play fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-brand-primary transition-colors font-sans">
                Success Story: Empowering Rural Communities
              </h3>
              <p className="text-gray-500 text-sm font-sans">October 2024</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;


