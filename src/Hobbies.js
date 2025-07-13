import React, { useState } from 'react';

const sectionDescriptions = {
  games: "I've played tons of games over the years, but here are some of my favorites. Each one has a story or memory attached to it",
  movies: "Some movies I loved",
  music: "",
  books: "Some books that i read",
};

const games = [
  { name: "Assassin's Creed Black Flag", img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fr_sAn91pKh_qTvL3ANX_Q.jpeg" },
  { name: "Assassin's Creed Brotherhood", img: "https://wallpapers.com/images/high/assassin-s-creed-brotherhood-2560-x-1600-wallpaper-w5zp85n6spu26qbe.webp" },
  { name: "Braid", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeSDA0u2IAP8WLUdS_pK_c-VCyec1tMpGsw&s" },
  { name: "City Skylines", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ycyy25C7MCN3oSY-WlPRdrwT9w6wH6iDkg&s" },
  { name: "CSGO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsinlmhaPi7I_32qzCgflmzbW5T3Vaa700Q&s" },
  { name: "Days Gone", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnIF6r7_Z_J8OUCgRzEs9OKHoj4HmlODSRZQ&s" },
  { name: "DOTA 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZKtyBlFsEQeQY0FDX1v87Ssl1SRD5eqeWg&s" },
  { name: "Farcry 2", img: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/legacy/far_Cry_2_01-550x309.png" },
  { name: "Forza Horizon 1", img: "https://store-images.s-microsoft.com/image/apps.47796.70158812030598618.d392f4f7-994d-4142-9423-85b22caff779.521299df-ca01-43ee-af9d-551990451bf0?q=90&w=480&h=270" },
  { name: "GTA SA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03jKCTQhHmCM8Sm5XaZLPDj_q3SLMN9FR7Q&s" },
  { name: "GTA V", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj887alFvowtLg3sNhmfstYi4k7YBd_x_jmX_XzdCjgle0PgsIZ_fTc5YIp-xloSslxU&usqp=CAU" },
  { name: "Road Rash", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZW-cEj9P_i6daGOCUog9zOXKMjWodiEv6w&s" },
  { name: "Avatar: the Game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8g77tllbBnKmXQoRMJkgvVDcqRPpDValxGg&s" },
  { name: "God of War (2018)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2H3NVBGu3FXHoJ09cC097DAoBi8tm2FuAw&s" },
];

const books = [
  { name: "Digital Fortress", img: "https://upload.wikimedia.org/wikipedia/en/c/c9/DigitalFortress.jpg" },
  { name: "I Am Malala", img: "https://m.media-amazon.com/images/I/71HD8T0bYzL._UF1000,1000_QL80_.jpg" },
  { name: "Clean Code", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-hNS7XC5c448guELCXFVUfXPKUlHQb0-rw&s" },
  { name: "Mein Kampf", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8z6LwvwayBb34Wyz5yG8Nvrv33nH7KqZJRA&s" },
];

const movies = [
  { name: "2001: A Space Odyssey", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvoIAHRb65HFAbb6VxkuR--3drPhwe0UFQA&s" },
  { name: "A Bronx Tale", img: "https://m.media-amazon.com/images/M/MV5BZWQxNjkxNzYtYjQ4NS00NTZmLWI2Y2ItNjcwYmFmZjJjM2UxXkEyXkFqcGc@._V1_QL75_UX388_.jpg" },
  { name: "Assassin's Creed", img: "https://ew.com/thmb/WxWoNE07gukFb3VzEhRby_nHmdw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/assassins-creed-01-7786c823b4794ced9bec32d8495c2d39.jpg" },
  { name: "Cidade de Deus", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_oWTILz6_LKFA2gbhVntqSlPgb7upTwPzLulZhhA23MIBECpecSQrQR7765v_WhOogamUB_9DlhZyv03VAxjv4U7ym7mLc_TZWHS7PKpYcGKzh5u8ef6frYHyOtecTWhPtoP71gIdwL17/s1600/city+of+god+6+.jpg" },
  { name: "Goodfellas", img: "https://m.media-amazon.com/images/M/MV5BMjI0ODA3NDQ4NV5BMl5BanBnXkFtZTcwMDMwMjMwNA@@._V1_.jpg" },
  { name: "Guy Ritchie's The Covenant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YcyKozl1U1BwoQoN6jQ-3yRTt_MeWnWKZA&s" },
  { name: "Joji", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPpS3MdeYV6GK5rN5IVZLKikaWT7zFOr7nw&s" },
  { name: "Ratatouille", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFyIKespa41CCfV6SwDU_jLayp6-2URMI2g&s" },
  { name: "Schindler's List", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjI9LiLIN5er7y4kwO_G0_uh5ba1ObOJGvw&s" },
  { name: "The Devil's Advocate", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPjm7yq5KI74jcMTA8fbjL0p6mEMw5nF4ZQ&s" },
  { name: "The Interview", img: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTACnoihEmK4xSskvRIW-plTkCNPOZLVRJ8r9CdSYX4enxq9li22GhTuF1-REvEd6EqJNXa6YzOlvZuMBGnOhPIE1uPYlOqFeqHN.jpg?r=b0f" },
  { name: "The Lunchbox", img: "https://resizing.flixster.com/7KwPCpGzvqf5P2Rge7To_cs3n1Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/131748_ba.jpg" },
  { name: "The Other Guys", img: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfuKXeN4pf-ROcuJgvy41h1ZErya6R_UPdVGGfLAhso98UfSZRvDNfgd-ClhyJ7KHdyGb7ixZ4GKuHls_vS2ELDhvgwLXParEv1p.jpg?r=960" },
  { name: "War Dogs", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0bLmyto_keNrDRMlSyh1739KZQMjeHTGEeFcszqFEtz4Z-fFD3zU4IgJfFN9oSNWcRR1PUQrcJcK_lW_Hvkcz5L-XhHYpIPsdS-JdBXM0" },
];

const music = [
  { name: "-", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAh1hTc86TFsBZ2tBhk9XbImhYLLILlhMO8A&s" },
  { name: "JJ Cale", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfwSDshsUAcG2jdorLWRyRaJHJlKQmahCh9UW6F8odT8V1n7TDSQcU3O92ZwGACRgrjk&usqp=CAU" },
  {name: "Jimi Hendrix", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPFaEPo75ZHANQHhax36Nlitb_YYFieeefQ&s"}
];


function CardList({ items }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'center'
    }}>
      {items.map((item) => (
        <div
          key={item.name}
          className="game-card"
          style={{
            width: '120px',
            border: '2px solid #000',
            background: '#fff',
            fontFamily: "'MS Sans Serif', Tahoma, Geneva, Verdana, sans-serif",
            margin: '4px',
            padding: '8px',
            textAlign: 'center'
          }}
        >
          {item.img && (
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: '100px',
                height: '70px',
                objectFit: 'cover',
                marginBottom: '6px',
                border: '1px solid #888',
                background: '#c0c0c0'
              }}
            />
          )}
          <div style={{ fontSize: '0.95em', marginTop: '4px' }}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

const sections = [
  { key: 'books', label: 'Books', items: books },
  { key: 'games', label: 'Games', items: games },
  { key: 'movies', label: 'Movies', items: movies },
  { key: 'music', label: 'Music', items: music },
];

export default function Hobbies() {
  const [active, setActive] = useState('games');

  return (
    <section className="win95-section">
      <h2>Stuff i love</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
        {sections.map(sec => (
          <button
            key={sec.key}
            onClick={() => setActive(sec.key)}
            style={{
              fontFamily: "'MS Sans Serif', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: '1em',
              padding: '4px 12px',
              margin: 0,
              border: '2px solid #000',
              background: active === sec.key ? '#c0c0c0' : '#fff',
              cursor: 'pointer'
            }}
          >
            {sec.label}
          </button>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginBottom: '12px', fontSize: '1em' }}>
        {sectionDescriptions[active]}
      </p>
      <CardList items={sections.find(sec => sec.key === active).items} />
    </section>
  );
}