import React, { useState } from 'react';

const slides = [
  (
    <div>
      <h2>05/05/2001</h2>
      <p>
  I was born here -&gt;{' '}
  <a
    href="https://maps.app.goo.gl/KFDbNjGLz7hSt8Yq5"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#000080', textDecoration: 'underline' }}
  >
    (12.958359720541528, 77.64909388855723)
  </a>{' '}
  at around 12:05AM
</p>
    </div>
  ),
  (
    <div>
      <h2>2001 - 2009</h2>
      <p>I spent most of my childhood in Whitefield. I went to Ujjval Vidyalaya (near Hopefarm).
        I loved playing video games.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2009 - 2011</h2>
      <p>My dad bought me a PC, Intel Core 2 Duo, Windows XP, 2GB DDR2 RAM, Nvideo geforce 94000 G. I loved
        playing GTA VC and SA on it.
      </p>
    </div>
  ),
  
  (
    <div>
      <h2>2011 - 2017</h2>
      <p>I continued my schooling in Kendriya Vidyalaya MEG and Center, Bangalore.
      </p>
    </div>
  ),
   (
    <div>
      <h2>2011 - 2017</h2>
      <p>My brother upgraded our PC with an NVIDIA 900 series. WE loved modding and hacking GTA games. He also
        gifted me ACBH. I fell in love with the AC series.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2011 - 2017</h2>
      <p>I made an account on solo learn to learn HTML, CSS and JS. I loved their playground feature. I used to write
        css to create basic shapes and eventually make flowerpots and roads
      </p>
    </div>
  ),
  (
    <div>
      <h2>2011 - 2017</h2>
      <p>Apart from Kannada, Malayalam, Tamil,  English, and Hindi, I did German for 3 years and got the 
        opportunity to meet Joachim Gauck. I also secured a 10.0 CGPA in my 10th grade.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2017 - 2019</h2>
      <p>I got a merit seat in CMR NPUC. I chose Physics, Chemistry, Maths, and Computer Science with second language as French.
        Je parle un petit français.
      </p>
    </div>
  ),
    (
    <div>
      <h2>2017 - 2019</h2>
      <p>I got addicted to CS and DOTA :(
      </p>
    </div>
  ),
  (
    <div>
      <h2>2017 - 2019</h2>
      <p>My brother bought a GTX 1050 2GB from SP road. I learnt C programming and SQL quering.
        I loved creating terminal based games on C. I also got an XBOX360 and loved playing GTA V and Minecraft
         on it.  
      </p>
    </div>
  ),
  (
    <div>
      <h2>2017 - 2019</h2>
      <p>I made many C applications as a hobby. I learnt about C++ but still didnt find OOPs relevant. i can do everything in C that C++ can do.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2019 - 2023</h2>
      <p>I got a government seat for B.tech in Computer Science Engineering. I learnt lot of useful and useless stuff.
      </p>
    </div>
  ),
    (
    <div>
      <h2>2019 - 2023</h2>
      <p>Useful : C, C++, Why OOPs is relevant, DSA, DAA, Guitar, DBMS,  Web Dev, Python.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2019 - 2023</h2>
      <p>Useless : Calculus, Civil Engineering, Environmental Studies, NS2 programming, Waste Water Management.
      </p>
    </div>
  ),
   (
    <div>
      <h2>2019 - 2023</h2>
      <p>I bought an ACER NITRO. I5, 1050TI 6GB, 8GB DDR4 RAM, 1TB HDD, I later upgraded it to 16GB RAM from SP road.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2019 - 2023</h2>
      <p>I made C# form applicaitons, Django web apps, Express servers, made donut on blender, tried Unity and Unreal
        engine and also started mining crypto on my laptop.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2019 - 2023</h2>
      <p>In my final year, I interned in a semiconductor company that s/w prototyped chips in C - TLM.
        I secured 3 offers. I joined the one which offered me a scholarship for my M.Tech in software engineering. I also tried my shot
        in Navy :(
      </p>
    </div>
  ),
    (
    <div>
      <h2>2019 - 2023</h2>
      <p>I got my license for 2 Wheeler, 4 Wheeler and HAM radio - VU3CHG.
        I loved talking on VHF, rarely on HF.
      </p>
    </div>
  ),
  (
    <div>
      <h2>2023 - 2025</h2>
      <p>I am pursuing my M.tech while working and drawing salary. I hate HRs and their stupid questions.
        I also upgraded my HAM radio license to VU2JEH. I love transmitting in morse code.
      </p>
    </div>
  ),
];

export default function AboutMe() {
  const [slide, setSlide] = useState(0);
  return (
    <section className="win95-section" style={{ position: 'relative', minHeight: 180 }}>
      {slides[slide]}
      <div style={{ position: 'absolute', bottom: 8, right: 16, left: 16, textAlign: 'center', color: '#222', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        {slide > 0 && (
          <button
            className="retro-arrow-btn"
            style={{ fontSize: '1.1rem', padding: '1px 8px', margin: 0, position: 'static', transform: 'none' }}
            onClick={() => setSlide(slide - 1)}
            aria-label="Previous"
          >
            ◀
          </button>
        )}
        <span>{slide + 1} / {slides.length}</span>
        {slide < slides.length - 1 && (
          <button
            className="retro-arrow-btn"
            style={{ fontSize: '1.1rem', padding: '1px 8px', margin: 0, position: 'static', transform: 'none' }}
            onClick={() => setSlide(slide + 1)}
            aria-label="Next"
          >
            ▶
          </button>
        )}
      </div>
    </section>
  );
}
