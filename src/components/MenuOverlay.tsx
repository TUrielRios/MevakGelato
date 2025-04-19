import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  activeMenuItem: string | null;
  onMenuItemHover: (item: string | null) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ 
  isOpen, 
  activeMenuItem,
  onMenuItemHover
}) => {
  const menuItems = [
    { id: 'historia', label: 'HISTORIA' },
    { id: 'gelato', label: 'GELATO' },
    { id: 'Members Club', label: 'MEMBERS CLUB' },
    { id: 'Laboratorio', label: 'LABORATORIO' },
    { id: 'visitas', label: 'VISITAS' },
    { id: 'party-service', label: 'PARTY SERVICE' },
    { id: 'franquicias', label: 'FRANQUICIAS' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  const menuImages: Record<string, string[]> = {
    'historia': [
      'https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg',
    ],

    'gelato': [
      'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      'https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg',
    ],
    'Members Club': [
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    ],
    'Laboratorio': [
      'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg',
    ],
    'visitas': [
      'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg',
    ],
    'party-service': [
      'https://images.pexels.com/photos/587739/pexels-photo-587739.jpeg',
    ],
    'franquicias': [
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    ],
    'contacto': [
      'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg',
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images for active menu item
  React.useEffect(() => {
    if (!activeMenuItem) return;
    
    const images = menuImages[activeMenuItem];
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(current => (current + 1) % images.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [activeMenuItem]);

  return (
    <div 
      className={`fixed inset-0 bg-teal-600 z-40 transition-all duration-500 over ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="h-full w-full flex">
        {/* Menu content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-between p-8 pt-28 overf">
          <div className="h-full w-full pr-20 overflow-hidden">
            <ul className="flex flex-col gap-6 text-right">
              {menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  isActive={activeMenuItem === item.id}
                  onHover={onMenuItemHover}
                />
              ))}
            </ul>
          </div>
          
          <div className="mt-8 flex justify-start gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-color transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-color transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-color transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        {/* Image preview */}
        <div className="hidden lg:block w-1/2 h-full relative overflow-hidden">
          {activeMenuItem && menuImages[activeMenuItem] && (
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={menuImages[activeMenuItem][currentImageIndex]}
                alt={activeMenuItem}
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;