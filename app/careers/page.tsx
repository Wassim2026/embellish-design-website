import type { Metadata } from "next";
import { DataForm } from "@/components/data-form";
import { PageHero } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Careers", description: "Explore careers in design, engineering, site delivery and craftsmanship with Embellish Design Dubai." };

export default function CareersPage() {
  return <main><PageHero label="CAREERS" title="Build your future with us." text="We welcome designers, engineers, supervisors and craftspeople who care about quality and responsible delivery." image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=88" />
    <section className="page-content contact-page"><div><p className="eyebrow">JOIN THE TEAM</p><h2>Do work you can be proud of.</h2><p>Tell us about your experience, the role you are interested in and include a portfolio or profile link where relevant.</p><div className="role-list"><span>Interior designers</span><span>Project engineers</span><span>Site supervisors</span><span>Joinery specialists</span></div></div><DataForm kind="careers" /></section>
  </main>;
}

