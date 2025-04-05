
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ijso-dark-navy/30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ijso-cool-cyan/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 header-gradient">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            Have questions about IJSO preparation or want to contribute? Send us a message and we'll get back to you soon.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
