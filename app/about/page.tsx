import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site-chrome";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = { title: "About Our Dubai Design & Contracting Team", description: "Learn how Embellish Design combines planning, engineering, craftsmanship and project control." };

export default function AboutPage() {
  return <main><PageHero label="ABOUT US" title="Built on clarity and craft." text="A Dubai design and contracting team focused on considered planning, dependable execution and lasting quality." image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=88" />
    <section className="page-content two-col"><h2>A practical partner from concept to completion.</h2><div><p>Embellish Design brings designers, engineers, craftsmen and project coordination together under one roof. This joined-up approach keeps decisions clear and execution consistent.</p><p>Whether the project is an office, retail unit, restaurant or home, we shape every detail around how the space needs to look, feel and perform.</p><div className="statement"><b>Our promise</b><span>Transparent communication, responsible delivery and workmanship we are proud to stand behind.</span></div></div></section>
    <section className="about-image"><Image src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1800&q=88" alt="Design and construction planning" fill sizes="100vw" /></section>
    <section className="page-content values-section"><div><p className="eyebrow">WHAT GUIDES US</p><h2>Care in the details.<br />Confidence in delivery.</h2></div><div className="values-list"><article><span>01</span><h3>Clarity</h3><p>Clear scopes, decisions, reporting and accountability from the start.</p></article><article><span>02</span><h3>Craft</h3><p>Materials and workmanship selected for performance as well as appearance.</p></article><article><span>03</span><h3>Responsibility</h3><p>Realistic commitments and proactive communication when conditions change.</p></article></div></section>
    <section className="process page-process"><p className="eyebrow">OUR APPROACH</p><div className="process-grid"><h2>One joined-up<br /><em>delivery team.</em></h2><ol>{processSteps.map(([number, title, text]) => <li key={number}><b>{number}</b><div><strong>{title}</strong><span>{text}</span></div></li>)}</ol></div></section>
  </main>;
}

