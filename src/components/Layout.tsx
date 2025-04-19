import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemHover = (item: string | null) => {
    setActiveMenuItem(item);
  };

  return (
    <div className="relative">
      <Navbar 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu} 
      />
      <MenuOverlay 
        isOpen={menuOpen} 
        activeMenuItem={activeMenuItem}
        onMenuItemHover={handleMenuItemHover}
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;