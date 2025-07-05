import React, { useState } from 'react';

export default function NavBar({ onNav }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      {showNav && (
        <nav className="nav-bar">
          <button className="nav-link" onClick={() => onNav('home')}>Home</button>
          <button className="nav-link" onClick={() => onNav('about')}>About Me</button>
          <button className="nav-link" onClick={() => onNav('projects')}>Academic Projects</button>
          <button className="nav-link" onClick={() => onNav('resume')}>Personal Projects</button>
          <button className="nav-link" onClick={() => onNav('blog')}>Blog</button>
          <button className="nav-link" onClick={() => onNav('hobbies')}>Hobbies</button>
          <button className="nav-link" onClick={() => onNav('contact')}>Contact</button>
        </nav>
      )}
      <div style={{ textAlign: 'center', margin: 0, width: '100%' }}>
        <button
          className="retro-arrow-btn"
          style={{ fontSize: '0.9rem', margin: 0, padding: '0 6px', height: 22, minWidth: 22, borderTopLeftRadius: 0, borderTopRightRadius: 0, lineHeight: 1 }}
          onClick={() => setShowNav((v) => !v)}
          aria-label={showNav ? 'Hide navigation' : 'Show navigation'}
        >
          {showNav ? '▲' : '▼'}
        </button>
      </div>
    </div>
  );
}
