"use client";

import { useState, useEffect } from "react";

interface LightboxState {
  src: string;
  caption: string;
}

const ZoomIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const items = [
  {
    src: "/images/483544308_1243237294470343_1554870820880846258_n.jpg",
    caption: "Grupinis nardymas",
    pos: "center 40%",
  },
  {
    src: "/images/480292938_8626668484099751_1675768053607996615_n.jpg",
    caption: "Bubble Rangers",
    pos: "center 18%",
  },
  {
    src: "/images/514180795_10160846598761402_2665375292243788167_n.jpg",
    caption: "Atradimas",
    pos: "center 25%",
  },
  {
    src: "/images/480656819_8635931366506796_7016877360518272788_n.jpg",
    caption: "Pamoka baseine",
    pos: "center 28%",
  },
  {
    src: "/images/513222113_10160841820521402_394034058995721228_n.jpg",
    caption: "Žiedo paieška",
    pos: "center 15%",
  },
  {
    src: "/images/67834571_1994567567309909_7145487556497375232_n.jpg",
    caption: "Lobiai iš gelmių",
    pos: "center 15%",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section id="galerija" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Galerija</span>
            <h2>Nardymo dienoraštis</h2>
            <p>Kiekvienas nardymas – nauja istorija</p>
          </div>
          <div className="gallery-grid">
            {items.map((item, i) => (
              <div
                key={i}
                className="gallery-item reveal"
                style={{ "--i": i } as React.CSSProperties}
                onClick={() =>
                  setLightbox({ src: item.src, caption: item.caption })
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  style={{ objectPosition: item.pos }}
                />
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                  <div className="gallery-zoom">
                    <ZoomIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5,10,20,0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            cursor: "zoom-out",
            animation: "lb-in 0.25s ease",
          }}
        >
          <style>{`@keyframes lb-in { from { opacity:0 } to { opacity:1 } }`}</style>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "28px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.6rem",
              cursor: "pointer",
              opacity: 0.6,
            }}
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            style={{
              maxWidth: "90vw",
              maxHeight: "82vh",
              borderRadius: "12px",
              boxShadow: "0 20px 80px rgba(0,0,0,0.7)",
              objectFit: "contain",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-family-head)",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            {lightbox.caption}
          </p>
        </div>
      )}
    </>
  );
}
