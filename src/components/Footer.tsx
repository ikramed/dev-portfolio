import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
              Dev<span className="text-sky-500">Portfolio</span>
            </a>
            <p className="text-slate-500 mt-2 text-sm">
              Building digital experiences with passion.
            </p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="https://github.com/ikramed" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ikram-eddahby/" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ikram22eddahby@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0 text-slate-400 text-sm">
  Crafted with <Heart size={14} className="text-red-500 fill-red-500" /> care and creativity
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
