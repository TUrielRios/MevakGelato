import React, { useState } from 'react';
import VideoBackground from '../components/VideoBackground';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';
import { Volume2, VolumeX } from 'lucide-react';
import video from '../../assets/videos/videoPrincipalTest.mp4'

const HomePage: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const videoSrc = video;

  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    const video = document.querySelector('video');
    if (video) {
      video.muted = !isMuted;
    }
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <VideoBackground videoSrc={videoSrc} />
        
        <div className="absolute bottom-8 left-8 z-20">
          <button 
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX size={20} className="text-white" />
            ) : (
              <Volume2 size={20} className="text-white" />
            )}
          </button>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-wide leading-tight">
              <span className="playfair">MEVAK <span className="text-teal-600"> GELATO</span></span>
            </h1>
            <p className="text-lg md:text-xl montserrat max-w-xl mx-auto">
              Viví la experiencia MEVAK
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 border-2 border-white bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wider">
                Ver Sabores
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductsSection />
      <Footer />
    </>
  );
};

export default HomePage;