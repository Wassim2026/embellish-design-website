import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>This space is still being built.</h1><p>The page you requested does not exist or may have moved.</p><Link className="button primary" href="/">Return home <span>→</span></Link></main>;
}

