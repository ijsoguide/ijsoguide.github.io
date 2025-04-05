
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* Floating Design Elements */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-ijso-electric-blue/20 blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-ijso-deep-purple/20 blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[30%] right-[20%] w-24 h-24 rounded-full bg-ijso-cool-cyan/20 blur-3xl animate-pulse-light" style={{ animationDelay: '2s' }}></div>
      
      {/* Geometric shapes */}
      <div className="floating-element top-[20%] left-[20%] w-16 h-16 bg-ijso-electric-blue/10 backdrop-blur-sm rounded-lg transform rotate-45"></div>
      <div className="floating-element top-[60%] right-[15%] w-20 h-20 bg-ijso-cool-cyan/10 backdrop-blur-sm rounded-full" style={{ animationDelay: '1.5s' }}></div>
      <div className="floating-element top-[80%] left-[30%] w-12 h-12 bg-ijso-deep-purple/10 backdrop-blur-sm rounded-md transform rotate-12" style={{ animationDelay: '2.5s' }}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="glass-card p-8 md:p-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Your Ultimate Guide to <span className="header-gradient">IJSO Preparation</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Comprehensive resources, past papers, solutions, and interactive quizzes – all in one place!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary group">
                  Start Learning
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Button className="btn-secondary group flex items-center">
                  <Users size={20} className="mr-2" />
                  Join Our Community
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-ijso-electric-blue/20 backdrop-blur-md rounded-full animate-pulse-light"></div>
                <div className="absolute inset-10 bg-ijso-dark-navy/70 backdrop-blur-md rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center animate-rotate-slow">
                  <Globe size={200} className="text-ijso-cool-cyan/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
