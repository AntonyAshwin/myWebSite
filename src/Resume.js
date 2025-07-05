import React from 'react';

export default function Resume() {
  return (
    <section className="win95-section">
      <h2>Resume</h2>
      <a href="/resume.pdf" download className="nav-link">Download Resume (PDF)</a>
      <iframe
        src="/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="500px"
        style={{ border: '2px solid #000', background: '#fff', marginTop: '16px' }}
      ></iframe>
    </section>
  );
}
