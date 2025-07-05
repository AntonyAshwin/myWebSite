import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Blog from './Blog';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  const [section, setSection] = useState('home');

  return (
    <div className="App">
      <NavBar onNav={setSection} />
      <main>
        {section === 'home' && <Home />}
        {section === 'about' && <AboutMe />}
        {section === 'projects' && <Projects />}
        {section === 'resume' && <Resume />}
        {section === 'blog' && <Blog />}
        {section === 'hobbies' && <Hobbies />}
        {section === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
