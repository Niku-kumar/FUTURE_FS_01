import React from 'react';
import { Award, User, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Niku Kumar' },
    { icon: <Calendar size={20} />, label: 'Experience', value: '5+ Years' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'San Francisco, CA' },
    { icon: <Award size={20} />, label: 'Degree', value: 'B.S. Computer Science' },
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-dark">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-2 bg-portfolio-purple/20 rounded-lg blur-sm"></div>
            <motion.div 
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000" 
                alt="Jane Doe working" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Crafting Digital Experiences with Code</h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building modern 
              web applications. My journey in the world of programming started when I built my 
              first website at 15, and I've been hooked ever since.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I specialize in JavaScript ecosystems, building responsive and 
              performant applications with React on the frontend and Node.js on the backend.
              I'm also experienced with TypeScript, GraphQL, and various database technologies.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {personalInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="text-portfolio-purple">{item.icon}</div>
                  <div>
                    <span className="text-gray-400 text-sm">{item.label}: </span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
