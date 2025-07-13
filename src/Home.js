import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const audio = new Audio('/dontwait.mp3'); 
    audio.volume = 0.5; // Optional: set volume
    audio.play().catch(() => {
      
    });
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="win95-section" style={{ textAlign: 'center' }}>
      <div id="circle" style={{ margin: '16px auto' }}></div>
      <h1>Hi, I am Ashwin.</h1>
      <p>I am a 24 year old software engineer from Bangalore.<br />
      Welcome to my site :)</p>
    </div>
  );
}