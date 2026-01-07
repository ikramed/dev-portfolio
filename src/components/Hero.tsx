import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sky-400 font-medium tracking-wider uppercase mb-4">Front-End Developer</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
              Experiences
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            I specialize in building fast, responsive, and visually attractive websites with React and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-slate-600 hover:border-sky-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/ikramed" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ikram-eddahby/" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ikram22eddahby@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
