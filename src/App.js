import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import PersonalProjects from './PersonalProjects';
import Blog, { BlogPost } from './Blog';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  const [section, setSection] = useState('home');
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync section state with current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '/home') setSection('home');
    else if (path === '/about') setSection('about');
    else if (path === '/projects') setSection('projects');
    else if (path === '/resume') setSection('resume');
    else if (path.startsWith('/blog')) setSection('blog');
    else if (path === '/hobbies') setSection('Stuff i love');
    else if (path === '/contact') setSection('contact');
  }, [location.pathname]);

  // Handle navigation from NavBar
  const handleNav = (newSection) => {
    setSection(newSection);
    const routes = {
      'home': '/',
      'about': '/about',
      'projects': '/projects',
      'resume': '/resume',
      'blog': '/blog',
      'Stuff i love': '/hobbies',
      'contact': '/contact'
    };
    navigate(routes[newSection] || '/');
  };

  // Initialize audio on mount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/dontwait.mp3');
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
    }
    
    // Auto-start music when directly accessing a blog post
    // Must start MUTED due to browser autoplay policy - unmuted autoplay is blocked
    if (location.pathname.startsWith('/blog/') && !musicStarted) {
      setMusicMuted(true); // Start muted (browser allows this)
      setMusicStarted(true);
      audioRef.current.muted = true;
      audioRef.current.play().catch(() => {});
      
      // Try to auto-click unmute after render
      setTimeout(() => {
        const btn = document.getElementById('music-toggle-btn');
        if (btn) btn.click();
      }, 100);
    }
  }, []);

  // Handle music playback state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = musicMuted;
      if (musicStarted) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [musicStarted, musicMuted]);

  return (
    <div className="App">
      <NavBar onNav={handleNav} />
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
            id="music-toggle-btn"
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
        <Routes>
          <Route path="/" element={<Home musicStarted={musicStarted} />} />
          <Route path="/home" element={<Home musicStarted={musicStarted} />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<PersonalProjects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;