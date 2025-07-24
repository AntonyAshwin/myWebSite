import React, { useState } from 'react';

const posts = [
  {
    title: "Euphemism - I recently learnt what this means",
    content: (
      <>
        <p>A euphemism is a mild or indirect word or expression used in place of something that might be harsh, unpleasant, embarrassing, or blunt.</p>
        <b>When Euphemism is BAD in Agile:</b> <br />
        It hides real problems<br /><br />
        Saying “We had a few delays” instead of “We underestimated our capacity by 50%” kills transparency.<br /><br />
        It slows feedback loops<br /><br />
        Agile relies on fast, honest iteration. Euphemisms delay real conversations.<br /><br />
        It dilutes retrospectives<br /><br />
        A retro full of “some communication gaps” instead of “the design was never explained” leads to no improvement.<br /><br />
        It creates false alignment<br /><br />
        Everyone nods, but no one really knows what went wrong.<br /><br />
        Idk just my thoughts.<br /><br />
        Maybe I should plug this to an SQL server and make an actual blog out of it where others can reply.<br />
      </>
    )
  },
  // Add more posts here as needed
];

export default function Blog() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="win95-section">
      <h2>Blog / Thoughts</h2>
      {selected === null ? (
        <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
          {posts.map((post, idx) => (
            <li key={idx} style={{ margin: '12px 0', cursor: 'pointer', color: '#007' }} onClick={() => setSelected(idx)}>
              {post.title}
            </li>
          ))}
        </ul>
      ) : (
        <div className="blog-post">
          <button style={{ marginBottom: 12 }} onClick={() => setSelected(null)}>← Back to list</button>
          <h3>{posts[selected].title}</h3>
          {posts[selected].content}
        </div>
      )}
    </section>
  );
}