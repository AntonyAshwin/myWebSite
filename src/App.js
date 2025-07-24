import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import PersonalProjects from './PersonalProjects';
import Blog from './Blog';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  const [section, setSection] = useState('home');
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/dontwait.mp3');
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
    }
    audioRef.current.muted = musicMuted;
    if (musicStarted) {
      audioRef.current.play().catch(() => {});
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [musicStarted, musicMuted]);

  return (
    <div className="App">
      <NavBar onNav={setSection} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px' }}>
        {/* Place Play Music button below nav arrow */}
        {!musicStarted && (
          <button
            style={{
              marginTop: '4px',
              fontSize: '1em',
              padding: '6px 14px',
              border: '2px solid #000',
              background: '#fff',
              cursor: 'pointer'
            }}
            onClick={() => {
              setMusicStarted(true);
              const navArrow = document.querySelector('.nav-arrow');
              if (navArrow) {
                navArrow.click();
              }
            }}
          >
            Play Music
          </button>
        )}
        {musicStarted && (
          <button
            style={{
              marginTop: '4px',
              fontSize: '1em',
              padding: '6px 14px',
              border: '2px solid #000',
              background: '#fff',
              cursor: 'pointer'
            }}
            onClick={() => setMusicMuted(m => !m)}
          >
            {musicMuted ? 'Unmute Music' : 'Mute Music'}
          </button>
        )}
      </div>
      <main>
        {section === 'home' && <Home musicStarted={musicStarted} />}
        {section === 'about' && <AboutMe />}
        {section === 'projects' && <Projects />}
        {section === 'resume' && <PersonalProjects />}
        {section === 'blog' && <Blog />}
        {section === 'Stuff i love' && <Hobbies />}
        {section === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;