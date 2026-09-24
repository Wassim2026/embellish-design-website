import type { Metadata, Viewport } from "next";
import { Footer, Header, WhatsAppLink } from "@/components/site-chrome";
import "./globals.css";
import "./pages.css";
import "./forms.css";
import "./navigation.css";
import "./home-refresh.css";
import "./service-gallery.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://embellish-design-website.vercel.app"),
  title: { default: "Embellish Design | Construction & Landscaping Dubai", template: "%s | Embellish Design" },
  description: "Dubai contracting company delivering construction, demolition, landscaping, swimming pools and project management services.",
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.png" },
  openGraph: { title: "Embellish Design", description: "Considered design. Dependable delivery.", type: "website", locale: "en_AE" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111214" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body style={{ overflowX: "hidden" }}><Header />{children}<Footer /><WhatsAppLink /></body></html>;
}
