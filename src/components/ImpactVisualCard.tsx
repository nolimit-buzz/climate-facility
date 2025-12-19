import { motion } from "framer-motion";
import CountUp from "./CountUp";

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
  export default ImpactVisualCard;