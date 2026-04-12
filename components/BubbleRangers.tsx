export default function BubbleRangers() {
  return (
    <section id="bubble-rangers" className="section section-bubble-rangers">
      <div className="container bubble-rangers-grid">
        <div className="br-text reveal">
          <span className="section-tag tag-coral">Vaikų programa</span>
          <h2 className="br-title">
            <span className="bubble-logo">🫧</span> Bubble Rangers
          </h2>
          <p className="br-lead">
            Nardymo mokykla vaikams, kur nuotykiai prasideda nuo pirmo burbulo!
          </p>
          <p>
            „Bubble Rangers" – tai speciali programa, sukurta vaikams.
            Žaidybinis mokymasis, saugumas ir daugybė džiaugsmo. Vaikai mokosi
            kvėpuoti po vandeniu, pažįsta povandeninį pasaulį ir įgyja
            pasitikėjimo savimi.
          </p>
          <ul className="br-features">
            <li>🎯 Amžius nuo 8 metų</li>
            <li>🏊 Mokomės baseine</li>
            <li>👨‍🏫 Mažos grupės – didelis dėmesys</li>
            <li>🏅 Sertifikatas baigus kursą</li>
            <li>😄 Linksma ir saugu!</li>
          </ul>
          <a href="#kontaktai" className="btn btn-coral">
            Registruotis
          </a>
        </div>
        <div className="br-images reveal delay-1">
          <div className="br-img-stack">
            <div className="br-img-top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/480292938_8626668484099751_1675768053607996615_n.jpg"
                alt="Vaikas su nardymo įranga"
                style={{ objectPosition: "center 18%" }}
              />
            </div>
            <div className="br-img-bottom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/480656819_8635931366506796_7016877360518272788_n.jpg"
                alt="Instruktorius su vaikais"
                style={{ objectPosition: "center 28%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
