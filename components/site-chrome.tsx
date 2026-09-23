"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="Embellish Design home">
      <span className="brand-mark"><i>E</i></span>
      <span>EMBELLISH <b>DESIGN</b></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Brand />
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="nav-cta" href="tel:+971525242962">Call us</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand light />
        <p>Considered design.<br />Dependable delivery.</p>
        <div className="footer-links">
          {navigation.slice(0, 3).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact">Start a project</Link>
        </div>
      </div>
      <div className="footer-bottom"><span>Dubai, United Arab Emirates</span><span>© 2026 Embellish Design</span></div>
    </footer>
  );
}

export function PageHero({ label, title, text, image }: { label: string; title: string; text: string; image: string }) {
  return (
    <section className="page-hero">
      <div><p className="eyebrow">{label}</p><h1>{title}</h1><p>{text}</p></div>
      <div className="page-hero-media"><Image src={image} alt={title} fill priority sizes="(max-width: 850px) 100vw, 50vw" /></div>
    </section>
  );
}

export function WhatsAppLink() {
  return <a className="whatsapp-float" href="https://wa.me/971525242962?text=Hello%20Embellish%20Design%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Message Embellish Design on WhatsApp">WA</a>;
}

