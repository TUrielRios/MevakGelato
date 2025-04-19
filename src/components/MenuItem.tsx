import React from 'react';

interface MenuItemProps {
  id: string;
  label: string;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, label, isActive, onHover }) => {
  return (
    <li 
      className={`relative transition-all duration-300 text-xl md:text-2xl lg:text-3xl ${
        isActive ? 'text-white font-medium translate-x-0' : 'text-white translate-x-4'
      }`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <a 
        href={`#${id}`} 
        className="relative flex items-center justify-end group"
      >
        {isActive && (
          <span className="absolute right-full mr-4 text-primary-color">&bull;</span>
        )}
        <span className="relative">
          {label}
          <span 
            className={`absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ${
              isActive ? 'w-full' : 'group-hover:w-full'
            }`}
          ></span>
        </span>
      </a>
    </li>
  );
};

export default MenuItem;