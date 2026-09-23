import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  return <main>
    <section className="case-hero"><div className="case-hero-image"><Image src={project.cover} alt={project.title} fill priority sizes="100vw" /></div><div className="case-hero-title"><p>{project.category} · {project.number}</p><h1>{project.title}</h1></div></section>
    <section className="project-facts"><div><small>LOCATION</small><strong>{project.location}</strong></div><div><small>SCOPE</small><strong>{project.scope}</strong></div><div><small>YEAR</small><strong>{project.year}</strong></div></section>
    <section className="page-content case-intro"><h2>{project.summary}</h2><div><article><span>01</span><h3>The challenge</h3><p>{project.challenge}</p></article><article><span>02</span><h3>Our response</h3><p>{project.solution}</p></article><article><span>03</span><h3>The result</h3><p>{project.result}</p></article></div></section>
    <section className="case-gallery">{project.gallery.map((image, index) => <div className={index === 0 ? "gallery-wide" : ""} key={image}><Image src={image} alt={`${project.title} view ${index + 1}`} fill sizes={index === 0 ? "100vw" : "(max-width: 850px) 100vw, 50vw"} /></div>)}</section>
    <section className="next-page dark"><p>Next project</p><Link href={`/projects/${next.slug}`}><span>{next.number}</span>{next.title}<b>↗</b></Link></section>
  </main>;
}
