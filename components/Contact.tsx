"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      (e.target as HTMLFormElement).reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <section id="kontaktai" className="section section-dark">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Kontaktai</span>
          <h2>Susisiekime!</h2>
          <p>Turite klausimų? Rašykite ar skambinkite – atsakysiu greitai</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Vieta</h4>
                <p>Druskininkai, Lietuva</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Telefonas</h4>
                <p>
                  <a href="tel:+370862360170">+370 (8-623) 60170</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>El. paštas</h4>
                <p>
                  <a href="mailto:scubadruskininkai@gmail.com">
                    scubadruskininkai@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📘</div>
              <div>
                <h4>Facebook</h4>
                <p>
                  <a
                    href="https://www.facebook.com/scubadruskininkai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scuba Druskininkai
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Darbo laikas</h4>
                <p>
                  Pirmadienis–Sekmadienis
                  <br />
                  Pagal susitarimą
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form reveal delay-1" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Vardas</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jūsų vardas"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">El. paštas</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jusu@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Paslauga</label>
              <select id="service" name="service">
                <option value="">Pasirinkite paslaugą...</option>
                <option>Individualios pamokos</option>
                <option>Bubble Rangers (vaikai)</option>
                <option>Atvirojo vandens nardymas</option>
                <option>Grupiniai kursai</option>
                <option>Paieška po vandeniu</option>
                <option>Kita</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Žinutė</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Parašykite savo klausimą..."
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Siunčiama..." : "Siųsti žinutę 🤿"}
            </button>
            {status === "sent" && (
              <div
                style={{
                  textAlign: "center",
                  fontWeight: 700,
                  padding: "12px",
                  background: "rgba(0,212,255,0.07)",
                  border: "1px solid rgba(0,212,255,0.18)",
                  borderRadius: "9px",
                  color: "var(--color-cyan)",
                  fontSize: "0.88rem",
                }}
              >
                Ačiū! Susisieksiu su jumis greitai 🌊
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
