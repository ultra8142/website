import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Bot, Cpu, Cloud, CheckCircle, Send, Linkedin, Instagram, Github } from 'lucide-react';

// Components
import { NeuralBackground } from './components/ThreeBackground';
import { CustomCursor } from './components/CustomCursor';
import { HolographicGlobe } from './components/HolographicGlobe';
import { AIChatbot } from './components/AIChatbot';
import { Footer } from './components/Footer';
import { AIPage } from './pages/AIPage';
import { CloudPage } from './pages/CloudPage';
import { CyberPage } from './pages/CyberPage';

// --- Components ---

const LogoSVG = () => (
  <img
   src="./assets/logopng.png"
   alt="Logo"
   className="w-16 h-16 md:w-20 md:h-20 object-contain"
  />
);

const NavigationHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Reveal when nearing the 2nd section (About)
      // Assuming Hero is 100vh, we trigger just before or at the fold
      const triggerPoint = window.innerHeight * 0.9; 
      if (latest > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Strategic Vision', id: 'about' },
    { name: 'Capabilities', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="fixed top-0 left-0 right-0 z-40 bg-obsidian/80 backdrop-blur-md border-b border-copper/20 shadow-[0_5px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
             {/* Logo */}
             <div 
               className="flex items-center gap-3 cursor-pointer group" 
               onClick={() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'})}
             >
                <LogoSVG />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-copper-glow transition-colors leading-none">
                    Pra<span className="text-copper group-hover:text-white transition-colors">Naga</span>
                  </span>
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">Solutions</span>
                </div>
             </div>

             {/* Nav */}
             <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map(link => (
                  <button 
                    key={link.name}
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs font-bold text-gray-400 hover:text-copper transition-colors uppercase tracking-[0.15em] interactive relative group/link"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-copper group-hover/link:w-full transition-all duration-300" />
                  </button>
                ))}
             </nav>

             {/* CTA */}
             <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden lg:block px-6 py-2 bg-copper/10 border border-copper text-copper text-xs font-bold uppercase tracking-widest hover:bg-copper hover:text-black transition-all rounded-sm interactive"
             >
                Initiate
             </button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <NeuralBackground />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          style={{ y: y1, opacity }}
          className="flex flex-col items-center"
        >
          <motion.img 
            src="./assets/logowithouttext.png"
            alt="PraNaga Logo"
            className="w-32 h-32 md:w-48 md:h-48 object-contain mb-8 drop-shadow-[0_0_30px_rgba(249,113,51,0.4)]"
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <div className="flex flex-col items-center mb-6">
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter relative group cursor-default leading-none">
               <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Pra</span><span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#f97133] to-[#f4232e] drop-shadow-[0_0_25px_rgba(249,113,51,0.8)]">Naga</span>
            </h1>
            <span className="text-2xl md:text-4xl font-display font-bold text-white tracking-[0.2em] mt-2 drop-shadow-md">
              Solutions
            </span>
          </div>

          <div className="h-[2px] w-24 bg-copper mb-8 rounded-full shadow-[0_0_10px_#B87333]" />

          <motion.p 
            className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Intelligence That Shapes Next Gen
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6">
            <motion.button
               whileHover={{ 
                 scale: 1.05,
                 boxShadow: "0 0 30px rgba(184, 115, 51, 0.6)",
                 textShadow: "0 0 8px rgba(255,255,255,0.8)"
               }}
               whileTap={{ scale: 0.95 }}
               onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
               className="interactive px-8 py-4 bg-copper/10 border border-copper text-copper font-display font-bold uppercase tracking-wider rounded-sm relative overflow-hidden group"
            >
               <span className="relative z-10">Our Capabilities</span>
               <div className="absolute inset-0 bg-copper transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20" />
            </motion.button>
            
            <motion.button
               whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
               whileTap={{ scale: 0.95 }}
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
               className="interactive px-8 py-4 border border-white/20 text-white font-display font-bold uppercase tracking-wider rounded-sm hover:bg-white/5 transition-all"
            >
               Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-copper rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-24 relative flex items-center bg-charcoal/50">
       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                  <span className="text-copper">Strategic</span> Vision
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At PraNaga Solutions, we are more than developers, we are architects. Born from a passion for innovation, we combine the agility of a startup with the rigor of an enterprise product firm. We take your blueprints for AI, Automation, and Cloud and forge them into tangible, market-ready assets.
                </p>
                <p className="text-gray-400 mb-8">
                  Specializing in enterprise-grade solutions, we bridge the gap between complex backend logic and intuitive frontend experiences. From autonomous AI agents to zero-trust security frameworks, we build the systems that power the future of business.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                   {[
                     { label: "Methodology", value: "Startup Agility" },
                     { label: "Standards", value: "Enterprise Rigor" },
                     { label: "Core Focus", value: "AI, Cloud & Cyber Security" },
                     { label: "Outcome", value: "Market Ready" }
                   ].map((stat, idx) => (
                     <div key={idx} className="border-l-2 border-copper pl-4">
                        <div className={`font-display font-bold text-white leading-tight ${stat.value.length > 20 ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>{stat.value}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                     </div>
                   ))}
                </div>
             </motion.div>
          </div>
          <div className="hidden md:flex order-1 md:order-2 justify-center items-center relative">
             <div className="absolute inset-0 bg-copper/10 blur-[100px] rounded-full" />
             <HolographicGlobe />
          </div>
       </div>
    </section>
  );
};

const ServiceCard: React.FC<{ icon: any, title: string, desc: string, onClick?: () => void }> = ({ icon: Icon, title, desc, onClick }) => {
  return (
    <motion.div 
      className="group relative p-1 rounded-xl bg-gradient-to-br from-white/10 to-transparent hover:from-copper/50 transition-colors duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={onClick}
    >
      <div className="bg-obsidian h-full w-full rounded-xl p-8 relative overflow-hidden z-10 border border-white/5 group-hover:border-copper/30 transition-colors">
         {/* Morphing Background Blob (Simplified via CSS for performance in single file) */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-copper/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
         
         <div className="relative z-10">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-copper group-hover:text-black transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{desc}</p>
            
            <div className="flex items-center text-copper text-sm font-bold uppercase tracking-wider interactive">
               <span className="mr-2 group-hover:mr-4 transition-all">Learn More</span>
               <ArrowRight className="w-4 h-4" />
            </div>
         </div>
      </div>
    </motion.div>
  );
}

const ServicesSection = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const services = [
    { icon: Bot, title: "AI", desc: "We specialize in AI Automation and AI Agents, creating intelligent systems that streamline workflows and execute complex tasks autonomously.", linkId: "ai" },
    { icon: ShieldCheck, title: "Cyber Security", desc: "Fortifying digital ecosystems with zero-trust architectures and proactive AI-driven threat detection.", linkId: "cyber" },
    { icon: Cloud, title: "Cloud Management", desc: "Orchestrating resilient, scalable serverless infrastructures to ensure global availability and 99.9% uptime.", linkId: "cloud" },
  ];

  return (
    <section id="services" className="py-32 relative bg-obsidian">
      <div className="container mx-auto px-6">
         <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
         >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Our <span className="text-copper animate-pulse">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deploying advanced technological solutions to solve complex digital challenges.
            </p>
         </motion.div>

         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <ServiceCard 
                key={i} 
                icon={s.icon} 
                title={s.title} 
                desc={s.desc} 
                onClick={s.linkId ? () => onNavigate(s.linkId) : undefined} 
              />
            ))}
         </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-obsidian relative overflow-hidden flex flex-col items-center justify-center">
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10 text-center">
         <motion.div 
           className="mb-16"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
         >
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
             Driven by <span className="text-copper">Trust</span>
           </h2>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center justify-center"
           >
              <motion.button
                 whileHover={{ 
                   scale: 1.05,
                   boxShadow: "0 0 30px rgba(184, 115, 51, 0.6)",
                   textShadow: "0 0 8px rgba(255,255,255,0.8)"
                 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                 className="interactive px-8 py-4 bg-copper/10 border border-copper text-copper font-display font-bold uppercase tracking-wider rounded-sm relative overflow-hidden group"
              >
                 <span className="relative z-10">Be our first Valuable Customer</span>
                 <div className="absolute inset-0 bg-copper transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20" />
              </motion.button>
           </motion.div>

         </motion.div>
       </div>
    </section>
  );
}

const ContactSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-obsidian to-charcoal text-center min-h-[60vh] flex flex-col justify-center items-center relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <AnimatePresence mode="wait">
          {!isFormOpen ? (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-4xl font-display font-bold mb-8">Ready to Initiate?</h2>
              <motion.button 
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(184,115,51,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="interactive bg-copper text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all"
              >
                Start Project
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-xl mx-auto bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
            >
               {/* Form Header */}
               <div className="mb-8 text-center">
                 <h3 className="text-2xl font-display font-bold text-white mb-2">Initialize Connection</h3>
                 <p className="text-gray-400 text-sm">Provide your transmission details below.</p>
               </div>

               {formStatus === 'success' ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center py-12"
                 >
                   <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle className="w-10 h-10 text-green-500" />
                   </div>
                   <h4 className="text-xl font-bold text-white mb-2">Transmission Received</h4>
                   <p className="text-gray-400">Our team will decode your request shortly.</p>
                   <button 
                     onClick={() => { setIsFormOpen(false); setFormStatus('idle'); }}
                     className="mt-8 text-copper hover:text-white text-sm font-bold uppercase tracking-wider interactive"
                   >
                     Return to Base
                   </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name <span className="text-copper">*</span></label>
                      <input required type="text" placeholder="Enter your designation" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-copper focus:outline-none transition-colors interactive" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email <span className="text-copper">*</span></label>
                      <input required type="email" placeholder="secure@frequency.com" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-copper focus:outline-none transition-colors interactive" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                      <input type="tel" placeholder="Optional frequency channel" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-copper focus:outline-none transition-colors interactive" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                      <textarea rows={4} placeholder="Brief your mission parameters..." className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-copper focus:outline-none transition-colors interactive resize-none" />
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                       <button 
                         type="button" 
                         onClick={() => setIsFormOpen(false)} 
                         className="text-gray-500 hover:text-white text-sm interactive"
                       >
                         Cancel
                       </button>
                       <button 
                         type="submit"
                         disabled={formStatus === 'submitting'}
                         className="bg-copper text-black px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center space-x-2 disabled:opacity-50 interactive"
                       >
                         <span>{formStatus === 'submitting' ? 'Transmitting...' : 'Transmit Request'}</span>
                         {!formStatus && <Send className="w-4 h-4" />}
                       </button>
                    </div>
                 </form>
               )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'ai' | 'cloud' | 'cyber'>('home');

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    if (page === 'ai') {
      setCurrentPage('ai');
    } else if (page === 'cloud') {
      setCurrentPage('cloud');
    } else if (page === 'cyber') {
      setCurrentPage('cyber');
    } else {
      setCurrentPage('home');
    }
  };

  if (!isLoaded) {
    return (
      <div className="h-screen w-full bg-obsidian flex items-center justify-center">
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
           className="flex flex-col items-center"
         >
            <div className="w-16 h-16 border-4 border-copper border-t-transparent rounded-full animate-spin mb-4" />
            <div className="text-copper font-display tracking-widest uppercase text-sm">Initializing Core</div>
         </motion.div>
      </div>
    );
  }

  if (currentPage === 'ai') {
    return (
      <>
        <CustomCursor />
        <AIPage onBack={() => setCurrentPage('home')} />
        <AIChatbot />
      </>
    );
  }

  if (currentPage === 'cloud') {
    return (
      <>
        <CustomCursor />
        <CloudPage onBack={() => setCurrentPage('home')} />
        <AIChatbot />
      </>
    );
  }

  if (currentPage === 'cyber') {
    return (
      <>
        <CustomCursor />
        <CyberPage onBack={() => setCurrentPage('home')} />
        <AIChatbot />
      </>
    );
  }

  return (
    <div className="bg-obsidian min-h-screen text-white selection:bg-copper selection:text-black overflow-x-hidden">
      <CustomCursor />
      
      <NavigationHeader />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onNavigate={handleNavigate} />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;