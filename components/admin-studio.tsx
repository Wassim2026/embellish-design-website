"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Project, Service } from "@/lib/content";

type Tab = "overview" | "services" | "projects" | "enquiries" | "settings";
type Draft = { services: Service[]; projects: Project[]; company: { phone: string; email: string; address: string } };

export function AdminStudio({ initial }: { initial: Draft }) {
  const [tab, setTab] = useState<Tab>("overview");
  const [draft, setDraft] = useState(initial);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("embellish-admin-draft");
    if (stored) try { setDraft(JSON.parse(stored)); } catch { /* Ignore invalid local drafts. */ }
  }, []);

  function save() {
    window.localStorage.setItem("embellish-admin-draft", JSON.stringify(draft));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  }

  function updateService(index: number, key: "title" | "short", value: string) {
    setDraft((current) => ({ ...current, services: current.services.map((item, itemIndex) => itemIndex === index ? { ...item, [key]: value } : item) }));
  }

  function updateProject(index: number, key: "title" | "summary" | "location", value: string) {
    setDraft((current) => ({ ...current, projects: current.projects.map((item, itemIndex) => itemIndex === index ? { ...item, [key]: value } : item) }));
  }

  return <div className="admin-shell">
    <aside className="admin-sidebar"><div><small>EMBELLISH</small><strong>Content Studio</strong></div><nav>{(["overview", "services", "projects", "enquiries", "settings"] as Tab[]).map((item) => <button className={tab === item ? "active" : ""} key={item} onClick={() => setTab(item)}>{item}</button>)}</nav><Link href="/" target="_blank">View website ↗</Link></aside>
    <section className="admin-main">
      <header><div><p className="admin-kicker">ADMIN PANEL · PREVIEW MODE</p><h1>{tab}</h1></div><button onClick={save}>{saved ? "Draft saved" : "Save local draft"}</button></header>
      {tab === "overview" && <><div className="admin-notice"><b>Publishing connection pending</b><p>This studio is ready for content editing. Drafts save in this browser until the production database and secure administrator login are connected.</p></div><div className="admin-stats"><article><span>{draft.services.length}</span><p>Service pages</p></article><article><span>{draft.projects.length}</span><p>Project case studies</p></article><article><span>0</span><p>New enquiries</p></article><article><span>Live</span><p>Website status</p></article></div><div className="admin-panel"><h2>Website checklist</h2><ul><li><b>Complete</b> Core company pages</li><li><b>Complete</b> Individual service pages</li><li><b>Complete</b> Project case studies and galleries</li><li><b>Pending</b> Database and protected login</li><li><b>Pending</b> Final domain connection</li></ul></div></>}
      {tab === "services" && <div className="admin-editor-list">{draft.services.map((service, index) => <article key={service.slug}><div><span>{service.number}</span><b>/{service.slug}</b></div><label>Service title<input value={service.title} onChange={(event) => updateService(index, "title", event.target.value)} /></label><label>Card summary<textarea value={service.short} onChange={(event) => updateService(index, "short", event.target.value)} /></label><Link href={`/services/${service.slug}`} target="_blank">Preview page ↗</Link></article>)}</div>}
      {tab === "projects" && <div className="admin-editor-list">{draft.projects.map((project, index) => <article key={project.slug}><div><span>{project.number}</span><b>{project.category}</b></div><label>Project title<input value={project.title} onChange={(event) => updateProject(index, "title", event.target.value)} /></label><label>Location<input value={project.location} onChange={(event) => updateProject(index, "location", event.target.value)} /></label><label>Summary<textarea value={project.summary} onChange={(event) => updateProject(index, "summary", event.target.value)} /></label><Link href={`/projects/${project.slug}`} target="_blank">Preview case study ↗</Link></article>)}</div>}
      {tab === "enquiries" && <div className="admin-empty"><span>INBOX</span><h2>No connected enquiries yet.</h2><p>Once MongoDB is connected, contact-form submissions and career applications will appear here with status and date filters.</p></div>}
      {tab === "settings" && <div className="admin-panel admin-settings"><h2>Company details</h2><label>Phone<input value={draft.company.phone} onChange={(event) => setDraft({ ...draft, company: { ...draft.company, phone: event.target.value } })} /></label><label>Email<input value={draft.company.email} onChange={(event) => setDraft({ ...draft, company: { ...draft.company, email: event.target.value } })} /></label><label>Address<input value={draft.company.address} onChange={(event) => setDraft({ ...draft, company: { ...draft.company, address: event.target.value } })} /></label><p>These settings remain local until database publishing is enabled.</p></div>}
    </section>
  </div>;
}
