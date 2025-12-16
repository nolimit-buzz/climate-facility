import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Content Column */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {/* Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ duration: 0.8 }}
              className="h-0  mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >                 
            <SectionHeading sub="Who We Are" title="Mobilising blended finance for sustainable energy access." />
              <p className="text-md text-gray-600 leading-relaxed mb-8 font-light">
                The Climate Finance Blending Facility (the "Facility") is a catalytic first
                loss multi-donor facility seeded with £10 million concessional funding
                by the UK Foreign, Commonwealth & Development Office ("FCDO") to
                mobilise additional capital for off-grid solutions.
              </p>

              <button className="group flex items-center gap-3 text-secondary font-bold text-sm hover:text-primary transition-colors">
                Read more about our mission
                <span className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <ArrowRight size={12} />
                </span>
              </button>
            </motion.div>

            {/* Partner Logos - Integrated cleanly */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-16 pt-10 border-t border-gray-100"
            >
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Strategic Partners & Funders</div>
              <div className="flex flex-wrap gap-x-8 gap-y-6 items-center opacity-80 hover:opacity-100 transition-opacity">

                {/* UK Aid */}
                <img src="/ukaid-logo.png" alt="UK Aid" width={100} height={100} className="h-6 w-auto" />

                {/* InfraCredit */}
                <img src="/infracredit-logo.svg" alt="InfraCredit" width={100} height={100} className="h-6 w-auto" />

                {/* AIICO */}
                <img src="/aiico-logo.png" alt="AIICO" width={100} height={100} className="h-6 w-auto" />

                {/* Linkage */}
                <img src="/linkage-logo.png" alt="Linkage" width={100} height={100} className="h-6 w-auto" />

              </div>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative min-h-[500px]"
          >
            <div className="absolute inset-0 bg-secondary rounded-sm overflow-hidden transform md:translate-x-8 md:translate-y-8 transition-transform">
              {/* Decorative background element */}
            </div>
            <div className="relative h-full w-full bg-gray-200 rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                alt="Solar Infrastructure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />

              {/* Overlay Card - PIDG Style */}
              <div className="absolute bottom-0 left-0 bg-secondary/95 backdrop-blur-sm p-8 text-white max-w-sm">
                <div className="text-3xl font-bold mb-2">£10m</div>
                <div className="text-sm text-gray-300 font-light border-t border-white/20 pt-2 mt-2">
                  Seed funding provided to de-risk and unlock local currency finance.
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;