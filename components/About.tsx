"use client";

import { useState, useEffect, useRef } from "react";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          let start: number | null = null;

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setValue(target);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-num">
      {value}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="apie" className="section">
      <div className="container about-grid">
        <div className="about-images">
          <div className="about-img-main reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/67834571_1994567567309909_7145487556497375232_n.jpg"
              alt="Instruktorius prie ežero"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
          <div className="about-img-float reveal delay-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/514180795_10160846598761402_2665375292243788167_n.jpg"
              alt="Nardytojų atradimas"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
        </div>
        <div className="about-text reveal delay-2">
          <span className="section-tag">Apie mus</span>
          <h2>
            Aistra nardymui –<br />
            virš <em>10 metų</em>
          </h2>
          <p>
            Esu profesionalus nardymo instruktorius iš Druskininkų. Per daugiau
            nei dešimtmetį padėjau šimtams žmonių – nuo mažiausių naujokų iki
            patyrusiųjų – atrasti povandeninį pasaulį.
          </p>
          <p>
            Kiekvienas nardymas yra nuotykis: radome žiedus, skulptūras ir
            daugybę ežerų paslapčių. Tikiu, kad nardymas turi būti ne tik
            saugus, bet ir linksmas!
          </p>
          <div className="stats">
            <div className="stat">
              <Counter target={10} suffix="+" />
              <span className="stat-label">Metų patirties</span>
            </div>
            <div className="stat">
              <Counter target={500} suffix="+" />
              <span className="stat-label">Išmokyti nardytojai</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Nuotykių</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
