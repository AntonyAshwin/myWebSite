import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import PersonalProjects from './PersonalProjects';
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
        {section === 'resume' && <PersonalProjects />}
        {section === 'blog' && <Blog />}
        {section === 'Stuff i love' && <Hobbies />}
        {section === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
