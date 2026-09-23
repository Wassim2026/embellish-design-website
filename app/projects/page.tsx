import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site-chrome";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Selected Interior Projects", description: "Explore commercial, residential, retail and hospitality interior projects by Embellish Design in Dubai." };

export default function ProjectsPage() {
  return <main><PageHero label="SELECTED WORK" title="Spaces with purpose." text="A collection of workplace, residential, retail and hospitality environments shaped around how people use them." image={projects[2].cover} />
    <section className="page-content project-index">{projects.map((project) => <Link href={`/projects/${project.slug}`} className="project-card" key={project.slug}><div className="project-card-image"><Image src={project.cover} alt={project.title} fill sizes="(max-width: 850px) 100vw, 50vw" /></div><div><span>{project.category} · {project.number}</span><h2>{project.title}</h2><p>{project.summary}</p><b>View case study ↗</b></div></Link>)}</section>
  </main>;
}

