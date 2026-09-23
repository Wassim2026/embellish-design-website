import type { Metadata } from "next";
import { DataForm } from "@/components/data-form";
import { PageHero } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Contact Our Dubai Fit-Out Team", description: "Request a quotation or site visit from Embellish Design in Dubai." };

export default function ContactPage() {
  return <main><PageHero label="CONTACT" title="Let’s build something well." text="Share your requirements and our Dubai team will get back to you to arrange the next step." image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=88" />
    <section className="page-content contact-page"><div><p className="eyebrow">GET IN TOUCH</p><h2>Start the conversation.</h2><p>For quotations, site visits and project enquiries, contact us directly or send the brief using this form.</p><div className="contact-panel"><a href="tel:+971525242962"><small>CALL</small><strong>+971 52 524 2962</strong><span>↗</span></a><a href="https://wa.me/971525242962" target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>Message our team</strong><span>↗</span></a><a href="mailto:info@embellishdesign.com"><small>EMAIL</small><strong>info@embellishdesign.com</strong><span>↗</span></a><div><small>ADDRESS</small><strong>Business Bay, Dubai</strong></div></div></div><DataForm kind="enquiries" /></section>
  </main>;
}

