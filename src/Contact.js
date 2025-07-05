import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="win95-section">
      <h2>Contact</h2>
      <form className="win95-form" onSubmit={handleSubmit}>
        <label>Name:<br />
          <input name="name" value={form.name} onChange={handleChange} required />
        </label><br />
        <label>Email:<br />
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label><br />
        <label>Message:<br />
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label><br />
        <button type="submit">Send</button>
      </form>
      {submitted && <div className="win95-success">Thank you! I'll get back to you soon.</div>}
      <div className="contact-links">
        <p>Email: antony.ashwin@email.com</p>
        <p>
          <a href="https://github.com/antonyashwin" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://linkedin.com/in/antonyashwin" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://twitter.com/antonyashwin" target="_blank" rel="noopener noreferrer">Twitter/X</a>
        </p>
        <p>Request a QSL card for radio: <a href="mailto:antony.ashwin@email.com?subject=QSL%20Card%20Request">Email me</a></p>
      </div>
    </section>
  );
}
