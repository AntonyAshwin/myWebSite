export default function Home({ musicStarted }) {
  return (
    <div className="win95-section" style={{ textAlign: 'center' }}>
      <div id="circle" style={{ margin: '16px auto' }}></div>
      <h1>Hi, I am Ashwin.</h1>
      <p>I am a 24 year old software engineer from Bangalore.<br />
      Welcome to my site :)</p>
      {musicStarted && (
        <p style={{ fontSize: '0.95em' }}>One Step Ahead Of The Blues by JJ Cale</p>
      )}
    </div>
  );
}