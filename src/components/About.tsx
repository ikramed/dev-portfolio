import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Zap, Smartphone } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-sky-400" />,
      title: "Clean Code",
      description: "I write clean, maintainable, and scalable code following best practices."
    },
    {
      icon: <Layout className="w-6 h-6 text-sky-400" />,
      title: "Responsive Design",
      description: "My websites look great on all devices, from mobile phones to large desktops."
    },
    {
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      title: "Fast Performance",
      description: "Optimized for speed and performance to ensure the best user experience."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-400" />,
      title: "Modern UI/UX",
      description: "I focus on creating intuitive and visually appealing user interfaces."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Passionate Front-End Developer based in the Digital World
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              My name is Ikram Ed.dahby, a Front-End Developer specialized in React. My journey in coding began with a curiosity for how things work on the web, which quickly turned into a passion for building beautiful and functional interfaces.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I focus on building fast, responsive, and visually attractive websites with great user experience. 
              With a strong sense of design and attention to detail, I bridge the gap between design and engineering.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-sky-400">+2</span>
                <span className="text-sm text-slate-400">Years Experience</span>
              </div>
              <div className="w-px bg-slate-600"></div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-sky-400">+20</span>
                <span className="text-sm text-slate-400">Projects Completed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-sky-500/50 transition-colors duration-300">
                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
