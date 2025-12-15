import React from 'react';
import {
  Leaf,
  Zap,
  BarChart3,
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import MapSection from './components/MapSection';
import FeaturedStories from './components/FeaturedStories';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import SectionHeading from './components/SectionHeading';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-brand-dark bg-white selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      {/* Other sections (impact, etc.) remain in index.tsx for now or can be further split */}
      {/* You can later move HowWeDriveImpact into its own component as well */}
      <Projects />
      <MapSection />
      <FeaturedStories />
      <LatestNews />

      {/* Net Zero Goal & Investors Combined Section */}
      <section className="relative text-white overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
            alt="Wind Farm Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-[#02100d] mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>

        <div className="pt-32 pb-20 container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-[#0f3d32] to-[#051F1A] p-1 rounded-2xl rotate-3 shadow-2xl">
                <div className="bg-brand-dark rounded-xl overflow-hidden p-8 aspect-[3/4] flex flex-col justify-between border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Leaf className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2 font-sans">NET ZERO</div>
                    <div className="text-xl text-gray-400 font-sans">
                      Strategy Report 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <SectionHeading sub="Our Goal" title="Aiming For Net Zero" dark />
              <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl font-sans">
                The Facility will use its impact seeking capital to blend the cost of Eligible
                Green Projects aimed at fulfilling two main environmental objectives: climate
                change mitigation and energy transition to a low-carbon economy.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <Zap className="text-brand-accent mb-4" size={32} />
                  <h4 className="font-bold text-xl mb-3 font-sans">Energy Efficiency</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    Energy-efficient appliances and equipments that lead to reduced energy
                    consumption.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <BarChart3 className="text-brand-accent mb-4" size={32} />
                  <h4 className="font-bold text-xl mb-3 font-sans">GHG Reduction</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    Renewable Energy Projects that reduce or avoid annual GHG emissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-24 pt-12 container mx-auto relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>
          <h3 className="text-center text-xs font-bold tracking-[0.2em] text-brand-accent/50 uppercase mb-12 font-sans">
            Domestic Institutional Investors
          </h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[
              'AIICO Insurance',
              'Linkage Assurance',
              'LEADWAY',
              'Pension Custodian',
              'United Capital',
              'MERISTEM',
            ].map((brand, i) => (
              <div
                key={i}
                className="text-xl font-bold text-white/40 hover:text-white transition-colors cursor-default tracking-wide font-sans"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;


