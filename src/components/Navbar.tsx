import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado si el usuario ha desplazado más de 100px
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 px-8 py-3 flex justify-between items-center transition-colors duration-300 ${
        isScrolled ? 'bg-teal-600' : 'bg-transparent'
      }`}
    >
      <div className="z-10">
        <h1 className="text-xl md:text-2xl font-medium playfair tracking-wide text-white">
          {/* Agrega tu logo o título aquí */}
        </h1>
      </div>
      <div className="flex items-center gap-4 z-10">
        <button
          className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
          aria-label="Change language"
        >
          <Globe size={20} className="text-white" />
        </button>
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
