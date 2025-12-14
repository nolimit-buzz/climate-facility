import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Search, 
  User, 
  Menu, 
  X, 
  Leaf, 
  Zap, 
  Globe, 
  TrendingUp, 
  MapPin, 
  ChevronRight, 
  Sun, 
  Droplets, 
  Award, 
  BarChart3, 
  ShieldCheck, 
  Briefcase,
  Download,
  BookOpen,
  Users,
  Lightbulb,
  Target,
  ArrowRightCircle,
  Calendar,
  Tag
} from 'lucide-react';

// --- Utils & Hooks ---

const CountUp = ({ to, duration = 2, className = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setValue(progress * to);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, duration]);

  // Format with commas if needed, simple implementation for integers
  const formatted = to % 1 === 0 
    ? Math.floor(value).toLocaleString() 
    : value.toFixed(1);

  return <span ref={nodeRef} className={className}>{formatted}</span>;
};

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Projects', href: '#projects' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src="/logo.svg" 
            alt="Climate Finance Blending Facility" 
            className="h-12 w-auto transition-opacity group-hover:opacity-90"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors relative group font-sans"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300">
            <Search size={18} />
          </button>
          <button className="px-5 py-2.5 bg-brand-accent text-brand-dark rounded-full font-semibold text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(72,192,163,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] font-sans">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-brand-dark z-40 flex flex-col pt-24 px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                key={link.name} 
                href={link.href}
                className="text-white text-3xl font-light py-4 border-b border-white/10 font-sans"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
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
          <source src="https://videos.pexels.com/video-files/855074/855074-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="container mx-auto relative z-20 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-brand-accent"></div>
            <span className="text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase font-sans">Impact Investment</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8 font-sans">
            Local Currency Blended <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">
              Climate Finance
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
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
              <button className="bg-brand-accent hover:bg-white text-brand-dark px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 group transition-all duration-300 min-w-[160px] shadow-lg shadow-brand-accent/20 font-sans">
                Learn More 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 flex items-center justify-center gap-2 backdrop-blur-sm transition-all min-w-[160px] font-sans">
                <Play size={18} fill="currentColor" /> Watch Video
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
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ sub, title, dark = false }) => (
  <div className="mb-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <div className={`h-px w-8 ${dark ? 'bg-brand-accent' : 'bg-brand-primary'}`}></div>
      <span className={`${dark ? 'text-brand-accent' : 'text-brand-primary'} text-xs font-bold tracking-[0.2em] uppercase font-sans`}>{sub}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-brand-dark'} font-sans`}
    >
      {title}
    </motion.h2>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden z-20">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Text & Partners */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="w-16 h-1.5 bg-brand-primary mb-8 rounded-full"></div>
            <div className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-6 font-sans">Who We Are</div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-dark mb-8 leading-[1.1] font-sans">
              Mobilising blended finance for <span className="text-brand-primary">sustainable energy access.</span>
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg font-sans">
              The Climate Finance Blending Facility (the "Facility") is a catalytic first 
              loss multi-donor facility seeded with £10 million concessional funding 
              by the UK Foreign, Commonwealth & Development Office ("FCDO") to 
              mobilise additional capital for off-grid solutions.
            </p>
            
            <div className="mb-16">
              <button className="group flex items-center gap-3 text-brand-dark font-bold text-lg hover:text-brand-primary transition-colors font-sans">
                Read more about our mission
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>

            {/* Partners Divider & Section */}
            <div className="mt-auto border-t border-gray-100 pt-10">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 font-sans">Strategic Partners & Funders</h4>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    <div className="w-3 h-3 bg-[#00247D]"></div>
                    <div className="w-3 h-3 bg-[#CC0000]"></div>
                  </div>
                  <span className="font-bold text-brand-dark text-lg tracking-tight font-sans">UKaid</span>
                </div>
                
                <span className="h-6 w-px bg-gray-200"></span>
                
                <div className="font-bold text-gray-600 text-lg font-sans">InfraCredit</div>
                
                <span className="h-6 w-px bg-gray-200"></span>
                
                <div className="flex items-center gap-1 font-bold text-[#002855]">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-[#C8102E] border-r-[6px] border-r-transparent"></div>
                  <span className="font-sans">AIICO</span>
                </div>
                
                <span className="h-6 w-px bg-gray-200"></span>
                
                <div className="flex flex-col leading-none font-bold text-gray-600 text-xs font-sans">
                  <span>LINKAGE</span>
                  <span>ASSURANCE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image & Offset Background */}
          <div className="relative mt-12 lg:mt-0 lg:pl-10">
            {/* The Solid Background Block (Offset Up and Right) */}
            <div className="absolute -top-12 -right-12 w-full h-full bg-[#051F1A] rounded-sm z-0 hidden lg:block"></div>

            {/* The Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full shadow-2xl"
            >
              <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop" 
                  alt="Solar Panels Cloudy Sky" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Dark Green Overlay Card */}
              <div className="absolute bottom-0 left-0 w-[85%] bg-[#051F1A] p-10 md:p-12 text-white shadow-2xl z-20">
                <div className="text-5xl font-bold mb-6 font-sans">£10m</div>
                <div className="h-px w-full bg-white/20 mb-6"></div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                  Seed funding provided to de-risk and unlock local currency finance.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
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
      <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
    </div>

    <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <div className="bg-brand-primary/90 w-fit px-3 py-1 rounded text-xs font-bold text-white mb-4 backdrop-blur-sm font-sans">SOLAR GRID</div>
      <h3 className="text-3xl font-bold text-white mb-6 leading-tight font-sans">{project.title}</h3>
      
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

const Projects = () => {
  const projects = [
    {
      title: "Darway Coast, Nigeria",
      capital: "₦800m Private Capital",
      capacity: "526KW Capacity",
      date: "Sep 2022",
      image: "https://images.unsplash.com/photo-1723133371535-1412bc2e412e?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Prado Power Energy",
      capital: "₦1.95bn Private Capital",
      capacity: "850kW Capacity",
      date: "Oct 2024",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Hotspot Network",
      capital: "₦955m Private Capital",
      capacity: "324KW Capacity",
      date: "Jun 2023",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-32 bg-brand-dark text-white relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <SectionHeading sub="Project Showcase" title="Leading with innovation in solar projects worldwide" dark />
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

const ImpactVisualCard = ({ icon: Icon, value, suffix, label, delay, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 bg-white"
  >
    {/* Background Image */}
    <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-brand-dark/70 group-hover:bg-brand-dark/60 transition-colors" />
    
    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-accent border border-white/20">
        <Icon size={24} />
      </div>
      
      <div>
        <div className="text-4xl md:text-5xl font-bold mb-2 flex items-baseline gap-1 tracking-tight font-sans">
          <CountUp to={value} />{suffix}
        </div>
        <div className="h-1 w-12 bg-brand-accent mb-4 rounded-full"></div>
        <div className="text-sm font-medium uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors font-sans">
          {label}
        </div>
      </div>
    </div>
  </motion.div>
);

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
                  image="https://images.unsplash.com/photo-1707064892275-a3088e8240be?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

const MapSection = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#48C0A3 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
    
    <div className="container mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/3">
           <motion.div 
             initial={{ scale: 0 }} 
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             style={{
               WebkitTextStroke: "1px rgba(5, 31, 26, 0.05)",
               color: "transparent"
             }}
             className="text-[12rem] leading-none font-bold select-none absolute -top-20 -left-10 z-0 font-sans"
           >
             35
           </motion.div>
           <div className="relative z-10">
             <div className="text-8xl font-bold text-brand-accent mb-2 font-sans">35</div>
             <div className="text-2xl font-medium mb-6 text-brand-dark font-sans">States Covered</div>
             <p className="text-gray-600 mb-8 leading-relaxed text-lg font-sans">
               Collectively, off-grid renewable energy projects located in 35 states 
               across the six geo-political zones in Nigeria have been approved for 
               co-financing by the Facility.
             </p>
             <button className="bg-brand-accent text-brand-dark px-8 py-4 rounded-full hover:bg-brand-dark hover:text-white transition-all font-bold flex items-center gap-2 shadow-lg shadow-brand-accent/20 font-sans">
               View All Locations <ArrowRight size={20} />
             </button>
           </div>
        </div>
        
        <div className="lg:w-2/3 relative w-full aspect-[4/3] flex items-center justify-center">
           <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-[0_0_30px_rgba(72,192,163,0.3)]">
              {/* Simplified Nigeria Map Shape */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#006838" />
                  <stop offset="100%" stopColor="#0B251C" />
                </linearGradient>
              </defs>
              <path 
                d="M100,200 C100,150 150,80 250,60 L500,50 L550,200 L530,350 L270,420 L80,350 Z" 
                fill="url(#mapGradient)" 
                stroke="#48C0A3" 
                strokeWidth="2"
                opacity="1"
              />
              
              {/* Animated pulses for locations */}
              {[
                {x: 150, y: 300}, {x: 200, y: 200}, {x: 350, y: 150}, 
                {x: 450, y: 250}, {x: 300, y: 350}, {x: 120, y: 250}, {x: 400, y: 300}, {x: 250, y: 120}
              ].map((pos, i) => (
                <g key={i}>
                  <circle cx={pos.x} cy={pos.y} r="4" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0.5;1" dur={`${2+i*0.5}s`} repeatCount="indefinite" />
                  </circle>
                  <circle cx={pos.x} cy={pos.y} r="15" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" values="4;20" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
           </svg>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedStories = () => {
  const storyImages = [
    "https://images.unsplash.com/photo-1761047647087-701689b118c3?q=80&w=1276&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-32 bg-brand-light">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
           <SectionHeading sub="Stories" title="Featured Stories" />
           <div className="flex gap-2">
             <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"><ArrowRight className="rotate-180" size={20}/></button>
             <button className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-primary transition-colors"><ArrowRight size={20}/></button>
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
                <h3 className="font-bold text-xl mb-2 group-hover:text-brand-primary transition-colors font-sans">Success Story: Empowering Rural Communities</h3>
                <p className="text-gray-500 text-sm font-sans">October 2024</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestNews = () => {
  const newsItems = [
    {
      tag: "Press Release",
      date: "24 Oct 2024",
      title: "Climate Finance Blending Facility announces strategic partnership with InfraCredit to scale green bonds",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
    },
    {
      tag: "Transaction",
      date: "15 Sep 2024",
      title: "Reaching 1 Million lives: Facility closes deal for 10MW off-grid solar expansion in Kano State",
      image: "https://images.unsplash.com/photo-1721137532012-ff8615f1ee8f?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      tag: "Milestone",
      date: "02 Aug 2024",
      title: "FCDO commits additional £5M funding to accelerate clean energy access across West Africa",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="news" className="py-32 bg-white relative z-10 border-t border-gray-100">
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

const Footer = () => (
  <footer className="bg-[#02100d] text-white pt-24 pb-12 border-t border-white/5 relative z-20">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col items-center lg:items-start lg:col-span-1">
          <a href="#" className="flex items-center mb-8">
            <img 
              src="/logo.svg" 
              alt="Climate Finance Blending Facility" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="font-bold text-lg mb-6 font-sans">About us</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-sans">
            {['Our mission', 'Our Institutional Framework', 'History', 'Leadership and governance', 'Our Impact'].map(link => (
              <li key={link} className="hover:text-brand-accent cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <h4 className="font-bold text-lg mb-6 font-sans">More from the Facility</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-sans">
            {['Centres', 'Meetings', 'Stakeholders', 'Facility stories', 'Press releases', 'Picture gallery', 'Podcasts', 'Videos'].map(link => (
              <li key={link} className="hover:text-brand-accent cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 text-center lg:text-left">
           <div>
              <h4 className="font-bold text-lg mb-6 font-sans">Engage with us</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-sans">
                {['Sign in', 'Partner with us', 'Become a member', 'Sign up for our press releases', 'Subscribe to our newsletters', 'Contact us'].map(link => (
                  <li key={link} className="hover:text-brand-accent cursor-pointer transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
           </div>
           
           <div>
              <h4 className="font-bold text-lg mb-6 font-sans">Quick links</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-sans">
                {['Sustainability at the Facility', 'Careers'].map(link => (
                  <li key={link} className="hover:text-brand-accent cursor-pointer transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8">
        <div className="flex gap-6">
            {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube', 'tiktok', 'at-sign'].map((icon, i) => (
               <div key={i} className="text-white hover:text-brand-accent cursor-pointer transition-colors">
                 {/* Icons would go here, simplified for now */}
                 <div className="w-5 h-5 bg-current rounded-full opacity-80"></div>
               </div>
            ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 text-sm font-sans">
          <span>Privacy Policy & Terms of Service</span>
          <span className="hidden md:inline">•</span>
          <span>© 2025 Climate Finance Blending Facility</span>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans antialiased text-brand-dark bg-white selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <HowWeDriveImpact />
      <Projects />
      <MapSection />
      <FeaturedStories />
      <LatestNews />

      {/* Net Zero Goal & Investors Combined Section */}
      <section className="relative text-white overflow-hidden bg-brand-dark">
        {/* Shared Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
            alt="Wind Farm Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-[#02100d] mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>

        {/* Net Zero Content */}
        <div className="pt-32 pb-20 container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
             <div className="lg:w-1/3">
               <div className="bg-gradient-to-br from-[#0f3d32] to-[#051F1A] p-1 rounded-2xl rotate-3 shadow-2xl">
                 <div className="bg-brand-dark rounded-xl overflow-hidden p-8 aspect-[3/4] flex flex-col justify-between border border-white/10 backdrop-blur-sm">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Leaf className="text-brand-accent"/></div>
                   <div>
                     <div className="text-4xl font-bold mb-2 font-sans">NET ZERO</div>
                     <div className="text-xl text-gray-400 font-sans">Strategy Report 2025</div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="lg:w-2/3">
               <SectionHeading sub="Our Goal" title="Aiming For Net Zero" dark />
               <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl font-sans">
                 The Facility will use its impact seeking capital to blend the cost of Eligible 
                 Green Projects aimed at fulfilling two main environmental objectives: 
                 climate change mitigation and energy transition to a low-carbon economy.
               </p>
               <div className="grid sm:grid-cols-2 gap-8">
                 <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                   <Zap className="text-brand-accent mb-4" size={32} />
                   <h4 className="font-bold text-xl mb-3 font-sans">Energy Efficiency</h4>
                   <p className="text-gray-400 text-sm leading-relaxed font-sans">Energy-efficient appliances and equipments that lead to reduced energy consumption.</p>
                 </div>
                 <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                   <BarChart3 className="text-brand-accent mb-4" size={32} />
                   <h4 className="font-bold text-xl mb-3 font-sans">GHG Reduction</h4>
                   <p className="text-gray-400 text-sm leading-relaxed font-sans">Renewable Energy Projects that reduce or avoid annual GHG emissions.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Investors Ticker (Integrated) */}
        <div className="pb-24 pt-12 container mx-auto relative z-10">
           <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>
           <h3 className="text-center text-xs font-bold tracking-[0.2em] text-brand-accent/50 uppercase mb-12 font-sans">Domestic Institutional Investors</h3>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
             {['AIICO Insurance', 'Linkage Assurance', 'LEADWAY', 'Pension Custodian', 'United Capital', 'MERISTEM'].map((brand, i) => (
               <div key={i} className="text-xl font-bold text-white/40 hover:text-white transition-colors cursor-default tracking-wide font-sans">{brand}</div>
             ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;