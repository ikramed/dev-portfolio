import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
  { name: 'HTML', level: 95, color: 'bg-orange-500' },
  { name: 'CSS', level: 90, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 88, color: 'bg-yellow-400' },
  { name: 'TypeScript', level: 82, color: 'bg-blue-600' },

  { name: 'React', level: 90, color: 'bg-sky-400' },
  { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-400' },
  { name: 'Bootstrap', level: 85, color: 'bg-purple-600' },
  { name: 'C Programming', level: 70, color: 'bg-slate-400' },
];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-slate-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className={`h-2.5 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'GitHub', 'VS Code', 'Figma', 'Responsive Design', 'REST APIs', 'NPM', 'Vite'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 text-sm hover:border-sky-500 hover:text-sky-400 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
