import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8 mb-20">
          <div>
            <h4 className="text-white mb-6 font-bold underline">Historia</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Gelato</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Alfajores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold underline">Locales</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Inspiration Lab</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Party Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold underline">Franquicias</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Tienda</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Novedades</a></li>
            </ul>
          </div>
          <div className="text-right">
            <h4 className="text-2xl font-black mb-4">SEGUÍ CONOCIÉNDONOS</h4>
            <h3 className="text-4xl font-black">MEVAK</h3>
          </div>
        </div>

        <div className="border-t border-black-800 pt-20">
          <div className="grid grid-cols-3 gap-8 items-end">
            <div>
              <h3 className="text-2xl mb-4">SUBSCRIBITE</h3>
              <p className="text-white font-bold">A NUESTRO NEWSLETTER</p>
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="NOMBRE"
                className="flex-1 bg-transparent border-b border-black-800 py-2 focus:outline-none focus:border-[#1f9e97] transition-colors"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="flex-1 bg-transparent border-b border-black-800 py-2 focus:outline-none focus:border-[#1f9e97] transition-colors"
              />
            </div>
            <div className="text-right">
              <button className="bg-white text-black px-8 py-3 hover:bg-[#1f9e97] hover:text-white transition-colors">
                SUSCRIBIRME
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-20">
            <a href="https://instagram.com/mevakgelato_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1f9e97] transition-colors">
              @mevakgelato_
            </a>
            <span className="text-black-600">•</span>
            <a href="https://facebook.com/mevakgelato" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1f9e97] transition-colors">
              /mevakgelato
            </a>
            <span className="text-black-600">•</span>
            <a href="https://tiktok.com/@mevakgelato_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1f9e97] transition-colors">
              @mevakgelato_
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;