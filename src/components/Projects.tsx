import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Yumlo App",
      description: "A delicious food delivery application with a modern interface, featuring menu browsing, cart management, and order tracking.",
      tags: ["React", "Tailwind CSS", "Redux"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demo: "https://yumlo.ma/fr"
    },
   
    {
      title: "Weather App",
      description: "Real-time weather dashboard that provides accurate forecasts, humidity levels, and wind speeds for cities worldwide.",
      tags: ["React", "OpenWeather API", "CSS3"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  
      demo: "https://ikramed.github.io/WeatherApp/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Check out some of my recent work. Each project is a unique piece of development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-slate-800 rounded-full text-white hover:bg-sky-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-2 bg-slate-800 rounded-full text-white hover:bg-sky-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-sky-400 rounded border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <a href={project.demo} className="text-sm font-medium text-white hover:text-sky-400 flex items-center gap-1 transition-colors">
                    Live Demo <ExternalLink size={14} />
                  </a>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/ikramed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors font-medium"
          >
            View More on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
