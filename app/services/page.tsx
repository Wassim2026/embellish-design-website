import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site-chrome";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Construction Services Dubai", description: "Explore Embellish Design's construction, demolition, landscaping, swimming pool and project management services in Dubai." };

export default function ServicesPage() {
  return <main><PageHero label="OUR SERVICES" title="One team. Every detail." text="Construction and outdoor works shaped around your site, programme, safety requirements and commercial goals." image="/embellish-services-hero-v3.webp" />
    <section className="page-content service-list">
      {services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug} className={`service-row service-row-${service.slug}`}><div className="service-row-copy"><span>{service.number}</span><h2>{service.title}</h2><p>{service.short}</p><b>View service ↗</b></div><div className="service-row-image"><Image src={service.image} alt={`${service.title} by Embellish Design`} fill sizes="(max-width: 850px) 100vw, 50vw" /></div></Link>)}
    </section>
  </main>;
}
