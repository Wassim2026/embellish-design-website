import type { Metadata } from "next";
import "./globals.css";
import "./pages.css";
import "./forms.css";

export const metadata: Metadata = {
  title: "Embellish Design | Fit-Out & Contracting Dubai",
  description: "Interior fit-out, renovation, joinery, MEP and project management services in Dubai.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
