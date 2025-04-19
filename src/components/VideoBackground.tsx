import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, posterSrc }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;