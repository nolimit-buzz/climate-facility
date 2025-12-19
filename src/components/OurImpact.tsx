import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Zap, Sun, MapPin, User, Leaf, TrendingUp, Download, ChevronRight, Target, Users, Lightbulb, Globe } from 'lucide-react';
import SectionHeading from './SectionHeading';
import CountUp from './CountUp';
import ImpactVisualCard from './ImpactVisualCard';
import { BookOpen, ArrowRight } from 'lucide-react';

const HowWeDriveImpact = () => {
    const [activeTab, setActiveTab] = useState('numbers');
    
    const tabs = [
      { id: 'numbers', label: 'Impact in Numbers' },
      { id: 'capacity', label: 'Capacity Building' },
      { id: 'theory', label: 'Theory of Change' }
    ];
  
    return (
      <section id="impact" className="py-32 bg-brand-light relative z-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <SectionHeading sub="Our Impact" title="How We Drive Impact" />
            
            <div className="flex p-1 bg-white rounded-full mb-12 lg:mb-0 shadow-premium border border-gray-100">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 font-sans ${
                    activeTab === tab.id 
                      ? 'bg-brand-primary text-white shadow-lg' 
                      : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
  
          <AnimatePresence mode="wait">
            {activeTab === 'numbers' && (
              <motion.div
                key="numbers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Top Stats */}
                <div className="bg-white rounded-3xl p-10 mb-12 relative overflow-hidden shadow-premium">
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider font-sans">Project Pipeline</span>
                      </div>
                      <div className="text-6xl md:text-7xl font-bold text-brand-dark flex items-baseline gap-2 font-sans">
                        <CountUp to={196.6} /> <span className="text-3xl text-gray-400 font-light">m USD</span>
                      </div>
                    </div>
                    
                    <div className="hidden md:block w-px h-24 bg-gray-100"></div>
                    
                    <div className="flex-1 md:text-right">
                      <div className="flex items-center gap-3 mb-3 md:justify-end">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider font-sans">Local Value Equivalent</span>
                        <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-5xl md:text-6xl font-bold text-brand-primary font-sans">
                        90.7b <span className="text-2xl text-gray-400 font-light">NGN</span>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Visual Cards Grid - PIDG Style */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <ImpactVisualCard 
                    icon={Zap} 
                    value={244420} 
                    suffix="" 
                    label="Connections to Energy" 
                    delay={0.1}
                    image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                  />
                  <ImpactVisualCard 
                    icon={Sun} 
                    value={32} 
                    suffix=" MW" 
                    label="Capacity Installed" 
                    delay={0.2}
                    image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                  />
                  <ImpactVisualCard 
                    icon={MapPin} 
                    value={1310} 
                    suffix="" 
                    label="Communities Served" 
                    delay={0.3}
                    image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  />
                  <ImpactVisualCard 
                    icon={User} 
                    value={7846} 
                    suffix="" 
                    label="Jobs Created" 
                    delay={0.4}
                    image="https://images.unsplash.com/photo-1564182842834-681b7be6de4b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <ImpactVisualCard 
                    icon={Leaf} 
                    value={611688} 
                    suffix=" t" 
                    label="Tonnes CO2 Reduced" 
                    delay={0.5}
                    image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
                  />
                  <ImpactVisualCard 
                    icon={TrendingUp} 
                    value={45.3} 
                    suffix="B" 
                    label="Capital Mobilised (NGN)" 
                    delay={0.6}
                    image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop"
                  />
                </div>
  
                {/* Download Report */}
                <div className="flex justify-center">
                  <button className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary transition-all shadow-xl hover:shadow-brand-primary/20 group font-sans">
                    <Download size={20} />
                    Download Impact & Sustainability Report
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}
  
            {activeTab === 'capacity' && (
              <motion.div
                key="capacity"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-premium">
                  <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-sm">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4 font-sans">Institutional Strengthening</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 font-sans">
                    We work directly with local financial institutions, regulators, and developers to build long-term 
                    capability in climate finance assessment, risk management, and project structuring.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Executive Training Programs for Bankers",
                      "Regulatory Framework Workshops",
                      "Developer Technical Assistance"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-dark font-medium p-4 bg-gray-50 rounded-xl shadow-sm font-sans">
                        <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
  
                <div className="bg-brand-dark p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8 border border-white/10">
                    <BookOpen size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-sans">Knowledge Management</h3>
                  <p className="text-gray-400 leading-relaxed mb-8 font-sans">
                    Sharing best practices, case studies, and market intelligence to accelerate the adoption 
                    of off-grid renewable energy solutions across the region.
                  </p>
                   <ul className="space-y-4">
                    {[
                      "Open Access Market Data",
                      "Impact Measurement Standards",
                      "Annual Industry Reports"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-medium p-4 bg-white/5 rounded-xl border border-white/5 font-sans">
                        <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
  
            {activeTab === 'theory' && (
              <motion.div
                key="theory"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-premium">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4 font-sans">Our Logic Model</h3>
                    <p className="text-gray-500 font-sans">
                      A systemic approach to mobilizing capital and delivering sustainable development impact through blended finance.
                    </p>
                  </div>
  
                  <div className="grid lg:grid-cols-4 gap-4 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-brand-dark/10 via-brand-primary/20 to-brand-accent/30 z-0"></div>
  
                    {[
                      {
                        step: "INPUTS",
                        icon: Target,
                        title: "Concessional Capital",
                        desc: "£10m first-loss funding from FCDO & Development Partners."
                      },
                      {
                        step: "ACTIVITIES",
                        icon: Users,
                        title: "Blended Finance",
                        desc: "De-risking projects to crowd-in private domestic investors."
                      },
                      {
                        step: "OUTPUTS",
                        icon: Lightbulb,
                        title: "Market Activation",
                        desc: "Clean energy access, jobs created, and carbon reduced."
                      },
                      {
                        step: "IMPACT",
                        icon: Globe,
                        title: "Green Economy",
                        desc: "Sustainable low-carbon transition and economic growth."
                      }
                    ].map((item, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-brand-light rounded-full border-4 border-white shadow-lg flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                          <item.icon size={32} />
                          {i < 3 && (
                            <div className="lg:hidden absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-gray-300">
                              <ArrowRight className="rotate-90" />
                            </div>
                          )}
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full hover:shadow-md transition-shadow h-full">
                          <span className="text-xs font-bold text-brand-accent tracking-widest block mb-2 font-sans">{item.step}</span>
                          <h4 className="text-lg font-bold text-brand-dark mb-2 font-sans">{item.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed font-sans">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  };
  
  export default HowWeDriveImpact;