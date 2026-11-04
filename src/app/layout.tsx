import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/layout/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinay S. Bhadane — Full Stack Web Developer",
  description: "Passionate Full Stack Web Developer and Computer Engineering undergraduate building production-ready, scalable, efficient, and accessible web applications.",
  keywords: [
    "Vinay Bhadane",
    "Vinay S. Bhadane",
    "Full Stack Web Developer",
    "React.js",
    "Next.js",
    "Java",
    "Tailwind CSS",
    "Firebase",
    "Portfolio",
  ],
  authors: [{ name: "Vinay S. Bhadane" }],
  creator: "Vinay S. Bhadane",
  openGraph: {
    title: "Vinay S. Bhadane — Full Stack Web Developer",
    description: "Passionate Full Stack Web Developer building production-ready web applications that are scalable, efficient, and accessible.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay S. Bhadane — Full Stack Web Developer",
    description: "Passionate Full Stack Web Developer building production-ready web applications that are scalable, efficient, and accessible.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-primary-text antialiased selection:bg-accent selection:text-background min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
