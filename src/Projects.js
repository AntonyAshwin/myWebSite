import React from 'react';

export default function Projects() {
  return (
    <section className="win95-section">
      <h2>Academic Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>Short description of academic project 1.</p>
        <a href="/reports/project1.pdf" download>Download PDF Report</a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>Short description of academic project 2.</p>
        <a href="/reports/project2.pdf" download>Download PDF Report</a>
      </div>
      <h2>Side Projects / Hobbies</h2>
      <div className="project-card">
        <h3>Side Project 1</h3>
        <p>Short description of side project or hobby.</p>
      </div>
    </section>
  );
}
