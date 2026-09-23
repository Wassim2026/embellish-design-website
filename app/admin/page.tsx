import type { Metadata } from "next";
import { AdminStudio } from "@/components/admin-studio";
import { projects, services } from "@/lib/content";

export const metadata: Metadata = { title: "Content Studio", robots: { index: false, follow: false } };

export default function AdminPage() {
  return <main><AdminStudio initial={{ services, projects, company: { phone: "+971 52 524 2962", email: "info@embellishdesign.com", address: "Business Bay, Dubai" } }} /></main>;
}
