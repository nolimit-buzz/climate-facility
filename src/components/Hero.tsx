import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/855074/855074-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="container mx-auto relative z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-brand-accent"></div>
            <span className="text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase font-sans">
              Impact Investment
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-8 font-sans">
            Local Currency Blended
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">
              Climate Finance for Off-Grid
            </span> Energy Access in Nigeria.
          </h1>

          <div className="flex flex-col gap-8 md:gap-12 items-start">
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl border-l border-white/20 pl-6 font-sans">
              Climate Finance Blending Facility will be the first of its kind to receive certification under
              the Electrical Grids and Storage criteria by the Climate Bonds Standard.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-row gap-4 mt-2"
            >
              {/* <button className="bg-brand-accent hover:bg-white text-brand-dark px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 group transition-all duration-300 min-w-[160px] shadow-lg shadow-brand-accent/20 font-sans">
                Learn More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button> */}
              <button className="px-10 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-secondary duration-300 flex items-center justify-center gap-2 backdrop-blur-sm transition-all min-w-[160px] font-sans">
                Learn More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-sans">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;


