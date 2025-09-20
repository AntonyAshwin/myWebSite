import React, { useState } from 'react';

const posts = [
  {
    title: "Death Stranding review",
    content: (
      <>
      <img
  src="https://assetsio.gnwcdn.com/death-stranding-pc-photo-mode.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
  alt="Death Stranding"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>   One of those games that i woudn't fitgirl repack. stars Norman Reedus as Sam Porter, a deliver guy tasked to reconnect isolated cities.
        vrushank says this is a walking simulator. to me, its fucking unique. I havent played anything like this before.

        The story is highly philosophical, very cryptic, and original. The apocalyptic futuristic world is haunted by ghost like thing called BTs and timefall - rain which ages stuff when the rain drops 
        get in contact with the stuff. its got some really deep story plots (david lynch stuff).

        Gameplay mechanics - 85% of the game is delivering stuff from one point to another. it sounds boring - its not. there are beautiful biomes, weight balancing, climbing mountains,
        crossing rivers, avoiding these BTs, and managing resource. also its got this async multiplayer like online players can leave their resouces for you. there is combat and stealth,
        but i dont think Kojima's focus was on them - probably added cuz of metalgear.

        Graphics - honestly, not that great, i was on an AMD Ryzen 5, RX 570 4GB, 16GB RAM. I could in 1920x1080 with all high, but the graphics still looked shit. maybe i have the Anisotropic low.
        and sharpness high. the render distance was amazing, though. Weather effects and physics are amazing - well polished. especially in the snow and rocky terrain. Characters are photo realistic. 

        Music - mostly by Low Roar - very melancholic. environment sound is amazing - especially the rain, thunder, snow storms and the BT detector sounds. Voice acting are by the actors themselves. + point

        Bugs and shit - didnt notice much, there are some weird jigs here and there when riding a motorcycle across rough terrain, also see them rarely when on foot - nothing major though. game is well
        optimized. 
        
        Story - Huge story with very deep references and tons of terminologies, miss one and you're gonna have to goolge it - else you'd miss the next thing and end up like watching a david lynch movie. I think its 
        got a 45 hours or something out of which lot of it is cinematics - and they are kinda the core element of this game. guys who loves movies will definetly love this game. if you are someone
        who likes to skip cinematics and jump to gameplay - maybe not for you, go play rocket league or some shit.

        Grind - I hate grinds, i just dont have the time for it, there is a bit of grind in the game for better tools and gears but honestly, you can beat the game without that too. optional quests 
        are mostly just deliveries for more resources. you can skip them - i dont think you'll miss much (maybe an easter egg or 2)

        Verdict - a 9/10 for me, must play for guys who love narrative-heavy.a very polarized experience - maybe not for everyone but yeah if it clicks you, its unforgettable. requires a lot of patience with story telling and gameplay
        that is kinda medeative and sometimes very cryptic.

      </>
    )
  },






    {
    title: "19th June 2024",
    content: (
      <>
      <img
  src="https://preview.redd.it/bengalurus-evening-sky-v0-s99djtrcr9ca1.jpg?width=640&crop=smart&auto=webp&s=c12fd2146056213e5e44d38d9125db555867a1d9"
  alt="Death Stranding"
  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
/>  I was dropping my brother at the airport, and we were talking about a bunch of things. Out of everything, we discussed Steve Winwood’s “Can’t Find My Way Home” - not the original by Blind Faith, but a live version with Eric Clapton. I loved the intro and the two other solos he played in it.

After dropping him off, I was driving back home. The sky was orange just as I got past the toll plaza, and I had this song on loop. I could feel the breeze outside, but I had my AC on. It was beautiful, there was nothing to worry about, everything felt right. I hadn’t felt like that in a really long time. There was a lot of shit going on in 2024 too, but in that moment, everything was perfect. Nothing to worry about, it just felt so fucking good. I’ve never gotten that feeling again.</>
    )
  },

   {
    title: "10-09-2025",
    content: (
      <>
    I decided to leave office a bit late today, tpying this while waiting for my deployment to finish. Its odd. I hated staying late in the office when i was in the previous company. I'd look at the clock 
    waiting for it to hit 7 so i could punch and log out.  i still didnt look at the time but i know its pretty late and i should head home.

      </>
    )
  },

      {
    title: "21-09-2025",
    content: (
      <>
is this something new ? commiting in a static file directly on the repo and calling it a blog post. no db, no server code, no session. sounds cool

      </>
    )
  },

  

  

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
          <button style={{ marginBottom: 12 }} onClick={() => setSelected(null)}>Back ←</button>
          <h3>{posts[selected].title}</h3>
          {posts[selected].content}
        </div>
      )}
    </section>
  );
}
