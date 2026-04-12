export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-bubbles" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
      <div className="container cta-band-inner reveal">
        <h2>Pasiruošęs nardyti?</h2>
        <p>Susisiek šiandien – pirmoji konsultacija nemokama!</p>
        <a href="#kontaktai" className="btn btn-primary btn-lg">
          Rezervuoti vietą
        </a>
      </div>
    </section>
  );
}
