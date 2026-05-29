import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from '../assets/images/logo.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O NAS', href: '#story' },
    { name: 'MENU', href: '#menu' },
    { name: 'KLIMAT', href: '#atmosphere' },
    { name: 'KONTAKT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-sand-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex-shrink-0">
          <img src={logoImage} alt="Przystań Morsa Logo" className="w-[120px] h-[120px] object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest font-medium transition-colors ${
                isScrolled ? 'text-sand-800 hover:text-black' : 'text-sand-100 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 text-sm tracking-wide transition-all rounded-full ${
              isScrolled
                ? 'bg-sea-900 text-sand-50 hover:bg-sea-800'
                : 'bg-sand-50 text-sea-900 hover:bg-white'
            }`}
          >
            REZERWACJA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled || mobileMenuOpen ? 'text-sand-900' : 'text-sand-50'} />
          ) : (
            <Menu className={isScrolled ? 'text-sand-900' : 'text-sand-50'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-sand-50 py-8 px-6 flex flex-col gap-6 shadow-xl border-t border-sand-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg tracking-widest font-medium text-sand-900 text-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full block text-center px-6 py-3 bg-sea-900 text-sand-50 tracking-wide rounded-full"
          >
            ZAREZERWUJ STOLIK
          </a>
        </motion.div>
      )}
    </nav>
  );
}
