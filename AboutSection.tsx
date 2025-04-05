
import React from 'react';
import { Check, BookOpen, Globe, MessageSquare } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-ijso-electric-blue/50 to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ijso-deep-purple/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 header-gradient">About the IJSO Guide</h2>
          <p className="text-gray-300 text-lg">
            Created by former IJSO medalists and science educators, this guide aims to provide accessible, high-quality resources for students preparing for the International Junior Science Olympiad. Our mission is to level the playing field and help students worldwide excel in science competitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Check size={40} className="text-ijso-neon-green" />,
              title: "Free & Open to All",
              description: "All resources are freely available to students worldwide, regardless of background."
            },
            {
              icon: <BookOpen size={40} className="text-ijso-electric-blue" />,
              title: "Covers All Syllabus Topics",
              description: "Comprehensive coverage of physics, chemistry, and biology topics in the IJSO syllabus."
            },
            {
              icon: <Globe size={40} className="text-ijso-cool-cyan" />,
              title: "Past Papers & Solutions",
              description: "Access to previous years' papers with detailed, step-by-step solutions and explanations."
            },
            {
              icon: <MessageSquare size={40} className="text-ijso-warm-orange" />,
              title: "Mock Tests & Quizzes",
              description: "Interactive practice tests and quizzes to test knowledge and track progress."
            }
          ].map((item, index) => (
            <div key={index} className="glass-card p-6 flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
