import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección principal con grilla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-white mb-4 font-bold underline">Historia</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Gelato</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Alfajores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4 font-bold underline">Locales</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Inspiration Lab</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Party Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4 font-bold underline">Franquicias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Tienda</a></li>
              <li><a href="#" className="hover:text-[#1f9e97] transition-colors">Novedades</a></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-2xl font-black mb-2">SEGUÍ CONOCIÉNDONOS</h4>
            <h3 className="text-4xl font-black">MEVAK</h3>
          </div>
        </div>

        {/* Sección de suscripción */}
        <div className="border-t border-black-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl mb-2">SUBSCRIBITE</h3>
              <p className="text-white font-bold">A NUESTRO NEWSLETTER</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
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
            <div className="text-center md:text-right">
              <button className="bg-white text-black px-6 py-3 hover:bg-[#1f9e97] hover:text-white transition-colors">
                SUSCRIBIRME
              </button>
            </div>
          </div>

          {/* Links de redes sociales */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://instagram.com/mevakgelato_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1f9e97] transition-colors"
            >
              @mevakgelato_
            </a>
            <span className="hidden sm:inline text-black-600">•</span>
            <a
              href="https://facebook.com/mevakgelato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1f9e97] transition-colors"
            >
              /mevakgelato
            </a>
            <span className="hidden sm:inline text-black-600">•</span>
            <a
              href="https://tiktok.com/@mevakgelato_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1f9e97] transition-colors"
            >
              @mevakgelato_
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
