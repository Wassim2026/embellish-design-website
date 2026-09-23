import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  return service ? { title: `${service.title} Dubai`, description: service.short } : {};
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const currentIndex = services.findIndex(({ slug }) => slug === service.slug);
  const next = services[(currentIndex + 1) % services.length];
  return <main>
    <section className="detail-hero"><div className="detail-hero-copy"><p className="eyebrow">SERVICE {service.number}</p><h1>{service.title}</h1><p>{service.intro}</p><Link className="button primary" href="/contact">Discuss your project <span>↗</span></Link></div><div className="detail-hero-image"><Image src={service.image} alt={service.title} fill priority sizes="(max-width: 850px) 100vw, 52vw" /></div></section>
    <section className="page-content service-detail"><div><p className="eyebrow">WHAT WE DELIVER</p><h2>Complete scope.<br />Careful execution.</h2></div><ul>{service.deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></section>
    <section className="service-process"><div className="section-heading"><div><p className="eyebrow">DELIVERY APPROACH</p><h2>How the work<br /><em>moves forward.</em></h2></div></div><div className="service-process-grid">{service.process.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    <section className="next-page"><p>Next service</p><Link href={`/services/${next.slug}`}><span>{next.number}</span>{next.title}<b>↗</b></Link></section>
  </main>;
}
