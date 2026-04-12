export default function Hero() {
  return (
    <section id="hero">
      <div className="bubbles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
      <div className="hero-content">
        <span className="hero-badge">Druskininkai · Lietuva</span>
        <h1>
          Nardyk su
          <br />
          <em>drąsa ir džiaugsmu</em>
        </h1>
        <p>Virš 10 metų patirtis · Individualios pamokos · Vaikų mokykla</p>
        <div className="hero-btns">
          <a href="#paslaugos" className="btn btn-primary">
            Paslaugos
          </a>
          <a href="#kontaktai" className="btn btn-outline">
            Susisiekti
          </a>
        </div>
      </div>
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#091728"
          />
        </svg>
      </div>
    </section>
  );
}
