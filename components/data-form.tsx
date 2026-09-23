"use client";

import { FormEvent, useState } from "react";

export function DataForm({ kind }: { kind: "enquiries" | "careers" }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    try {
      const form = new FormData(event.currentTarget);
      const body = Object.fromEntries(form.entries());
      const response = await fetch(`/api/${kind}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setState(response.ok ? "done" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form className="data-form" onSubmit={submit}>
      <input name="name" placeholder="Full name" autoComplete="name" required />
      <input name="email" type="email" placeholder="Email address" autoComplete="email" required />
      <input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" />
      {kind === "careers" ? <input name="role" placeholder="Position applied for" required /> : <input name="projectType" placeholder="Project type" />}
      <textarea name="message" placeholder={kind === "careers" ? "Experience and profile link" : "Tell us about your project"} required />
      <button disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Submit"}</button>
      {state === "done" ? <p className="success">Thank you. We received your submission.</p> : null}
      {state === "error" ? <p className="error">Online submissions are temporarily unavailable. Please email <a href="mailto:info@embellishdesign.ae">info@embellishdesign.ae</a> or contact us on WhatsApp.</p> : null}
    </form>
  );
}
