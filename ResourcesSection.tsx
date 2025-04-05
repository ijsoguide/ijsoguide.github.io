
import React from 'react';
import { FileText, BookOpen, Globe, CirclePlus } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      icon: <FileText size={30} className="text-ijso-electric-blue" />,
      title: "Past Papers & Solutions",
      description: "Access all previous IJSO exam papers with detailed solutions and explanations.",
      link: "#"
    },
    {
      icon: <BookOpen size={30} className="text-ijso-cool-cyan" />,
      title: "Speeches & Talks",
      description: "Watch and learn from renowned scientists and previous IJSO winners.",
      link: "#"
    },
    {
      icon: <Globe size={30} className="text-ijso-deep-purple" />,
      title: "Country-Specific Pages",
      description: "Find resources and information specific to your country's IJSO team.",
      link: "#"
    },
    {
      icon: <CirclePlus size={30} className="text-ijso-neon-green" />,
      title: "Mock Tests & Quizzes",
      description: "Test your knowledge with our interactive mock exams and quizzes.",
      badge: "Coming Soon!"
    }
  ];

  return (
    <section id="resources" className="py-24 relative bg-ijso-dark-navy/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ijso-dark-navy/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 header-gradient">Featured Resources</h2>
          <p className="text-gray-300 text-lg">
            Explore our comprehensive collection of study materials and practice resources designed to help you excel in the IJSO competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="glass-card group hover:translate-y-[-5px] transition-all duration-300">
              {resource.badge && (
                <div className="absolute -top-3 -right-3 bg-ijso-warm-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {resource.badge}
                </div>
              )}
              <div className="p-6">
                <div className="mb-4 flex justify-center">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">{resource.title}</h3>
                <p className="text-gray-300 text-center mb-4">{resource.description}</p>
                {resource.link && (
                  <div className="text-center">
                    <a 
                      href={resource.link} 
                      className="inline-flex items-center text-ijso-cool-cyan hover:text-ijso-electric-blue transition-colors"
                    >
                      Explore
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
