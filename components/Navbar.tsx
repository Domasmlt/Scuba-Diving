"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const links = [
    ["#apie", "Apie mus"],
    ["#paslaugos", "Paslaugos"],
    ["#bubble-rangers", "Bubble Rangers"],
    ["#galerija", "Galerija"],
  ];

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/292516018_470338108426936_1436452646893369608_n-removebg-preview.png"
          alt="Scuba Druskininkai"
        />
      </a>
      <button
        className={`burger${menuOpen ? " open" : ""}`}
        onClick={toggleMenu}
        aria-label="Meniu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href} onClick={closeMenu}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#kontaktai" className="nav-cta" onClick={closeMenu}>
            Susisiekti
          </a>
        </li>
      </ul>
    </nav>
  );
}
