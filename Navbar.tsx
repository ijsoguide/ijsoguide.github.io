
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white">
            IJSO <span className="text-ijso-cool-cyan">Guide</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/" 
                  className="text-white hover:text-ijso-cool-cyan transition-colors px-3 py-2"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#about" 
                  className="text-white hover:text-ijso-cool-cyan transition-colors px-3 py-2"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-ijso-cool-cyan bg-transparent hover:bg-transparent">
                  National Junior Science Olympiad
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 glass">
                    <li>
                      <NavigationMenuLink 
                        href="#papers"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-white hover:bg-ijso-deep-purple/50"
                      >
                        Papers
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="#theory"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-white hover:bg-ijso-deep-purple/50"
                      >
                        Theory
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="#experiments"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-white hover:bg-ijso-deep-purple/50"
                      >
                        Experiments
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="#speeches"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-white hover:bg-ijso-deep-purple/50"
                      >
                        Speeches
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#contact" 
                  className="text-white hover:text-ijso-cool-cyan transition-colors px-3 py-2"
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="hidden md:block">
          <Button className="btn-primary">Join Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="/" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            
            <div className="pl-4 border-l-2 border-ijso-cool-cyan">
              <p className="text-white mb-2 font-medium">National Junior Science Olympiad</p>
              <a href="#papers" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Papers</a>
              <a href="#theory" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Theory</a>
              <a href="#experiments" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Experiments</a>
              <a href="#speeches" className="block text-white hover:text-ijso-cool-cyan transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Speeches</a>
            </div>
            
            <a href="#contact" className="text-white hover:text-ijso-cool-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            <Button className="btn-primary w-full">Join Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
