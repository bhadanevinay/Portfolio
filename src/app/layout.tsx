import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-background text-primary-text antialiased selection:bg-accent selection:text-background min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
