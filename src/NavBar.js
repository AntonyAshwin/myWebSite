import React from 'react';

export default function NavBar({ onNav }) {
  return (
    <nav className="nav-bar">
      <button className="nav-link" onClick={() => onNav('home')}>Home</button>
      <button className="nav-link" onClick={() => onNav('about')}>About Me</button>
      <button className="nav-link" onClick={() => onNav('projects')}>Academic Projects</button>
      <button className="nav-link" onClick={() => onNav('resume')}>Personal Projects</button>
      <button className="nav-link" onClick={() => onNav('blog')}>Blog</button>
      <button className="nav-link" onClick={() => onNav('hobbies')}>Hobbies</button>
      <button className="nav-link" onClick={() => onNav('contact')}>Contact</button>
    </nav>
  );
}
