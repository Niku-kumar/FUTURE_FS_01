
import React from 'react';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2 
                className="text-portfolio-purple font-mono text-lg mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hello, I'm
              </motion.h2>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Niku Kumar
              </motion.h1>
              <motion.h2 
                className="text-2xl sm:text-3xl text-gray-300 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Full Stack Developer
              </motion.h2>
            </div>
            
            <motion.div 
              className="code-block max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
<span className="text-portfolio-purple">const</span> <span className="text-blue-400">developer</span> = {`{
  skills: ["JavaScript", "React", "Node.js", "TypeScript"],
  passions: ["Web Development", "UI/UX", "Opensource"],
  isAvailableForWork: true,
}`};
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button className="btn-primary" asChild>
                <a href="#projects">
                  View My Work <ExternalLink size={16} className="ml-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" /> GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-80 h-80 bg-portfolio-purple/20 rounded-full absolute top-0 right-0 animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="w-60 h-60 bg-portfolio-purple/10 rounded-full absolute bottom-0 left-0 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <motion.div 
              className="bg-secondary p-6 rounded-lg shadow-xl relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
                alt="Developer" 
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
