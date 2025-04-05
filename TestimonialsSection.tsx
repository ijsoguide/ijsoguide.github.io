
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  country: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "IJSO Gold Medalist",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    quote: "This guide was instrumental in my preparation. The detailed solutions helped me understand complex concepts that were previously confusing."
  },
  {
    name: "Mei Lin",
    role: "IJSO Silver Medalist",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    quote: "The practice quizzes were exactly at the level of the actual competition. I felt very well-prepared and confident during the exam."
  },
  {
    name: "Raj Patel",
    role: "Science Teacher",
    country: "India",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    quote: "As a teacher coaching students for IJSO, this resource has been invaluable. The comprehensive materials cover all necessary topics."
  },
  {
    name: "Sofia Garcia",
    role: "IJSO Bronze Medalist",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    quote: "What I appreciate most is how the guide breaks down complex topics into manageable sections. It made my study process much more efficient."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-ijso-dark-navy/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 header-gradient">Success Stories</h2>
          <p className="text-gray-300 text-lg">
            Hear from students and teachers who have achieved great results with our IJSO preparation materials.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-ijso-electric-blue/10 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-ijso-cool-cyan/10 rounded-tl-full"></div>
            
            <div className="relative">
              <div className={`flex flex-col md:flex-row items-center gap-8 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-ijso-electric-blue flex-shrink-0">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <p className="text-gray-300 text-lg mb-6 italic">"{testimonials[currentIndex].quote}"</p>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-ijso-cool-cyan">{testimonials[currentIndex].role}</p>
                    <p className="text-gray-400">{testimonials[currentIndex].country}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating) return;
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={`w-3 h-3 mx-1 rounded-full transition-all ${
                      index === currentIndex ? 'bg-ijso-electric-blue scale-110' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 flex">
                <Button onClick={goToPrevious} size="icon" variant="ghost" className="rounded-full bg-black/20 hover:bg-black/40 text-white">
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 flex">
                <Button onClick={goToNext} size="icon" variant="ghost" className="rounded-full bg-black/20 hover:bg-black/40 text-white">
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
