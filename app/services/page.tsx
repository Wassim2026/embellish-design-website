import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site-chrome";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Interior Fit-Out Services Dubai", description: "Explore Embellish Design's fit-out, renovation, MEP, joinery, design and project management services in Dubai." };

export default function ServicesPage() {
  return <main><PageHero label="OUR SERVICES" title="One team. Every detail." text="Integrated design and build services shaped around your space, timeline and commercial goals." image={services[4].image} />
    <section className="page-content service-list">
      {services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug} className="service-row"><div className="service-row-copy"><span>{service.number}</span><h2>{service.title}</h2><p>{service.short}</p><b>View service ↗</b></div><div className="service-row-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 850px) 100vw, 42vw" /></div></Link>)}
    </section>
  </main>;
}

