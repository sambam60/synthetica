import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYNTHETICA | A Cyberpunk Short Film",
  description: "A cyberpunk short film about memory, grief and identity. Written and directed by Sam Fitch.",
  keywords: ["synthetica", "cyberpunk", "short film", "neo-noir", "sci-fi", "cardiff film"],
  authors: [{ name: "Sam Fitch" }],
  openGraph: {
    title: "SYNTHETICA | A Cyberpunk Short Film",
    description: "A cyberpunk short film about memory, grief and identity.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNTHETICA | A Cyberpunk Short Film",
    description: "A cyberpunk short film about memory, grief and identity.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
