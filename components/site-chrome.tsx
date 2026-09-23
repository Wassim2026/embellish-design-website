"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, services } from "@/lib/content";

const navigation = [
  ["About", "/about"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

const dropdowns = [
  {
    label: "Services",
    href: "/services",
    items: services.map(({ title, slug }) => ({ label: title, href: `/services/${slug}` })),
  },
  {
    label: "Projects",
    href: "/projects",
    items: projects.map(({ title, slug }) => ({ label: title, href: `/projects/${slug}` })),
  },
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
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        {dropdowns.map((dropdown) => (
          <div className="nav-group" key={dropdown.href}>
            <Link className="nav-parent" href={dropdown.href} onClick={() => setOpen(false)}>
              {dropdown.label}<span aria-hidden="true">⌄</span>
            </Link>
            <div className="nav-dropdown" aria-label={`${dropdown.label} pages`}>
              <Link className="nav-all" href={dropdown.href} onClick={() => setOpen(false)}>View all {dropdown.label.toLowerCase()}</Link>
              {dropdown.items.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              ))}
            </div>
          </div>
        ))}
        {navigation.slice(1).map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
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
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
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
