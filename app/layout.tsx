import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Sans } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

// const dm_sans = DM_Sans({
//   variable: "--font-dm_sans",
//   subsets: ["latin"],
// })

const ibm_sans = IBM_Plex_Sans({
  variable: "--font-ibm_sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahsanuddin.netlify.app"),
  title: "Ahsan Uddin | Software Test Engineer",
  description:
    "Software Test Engineer focused on manual and automation testing across UI, API, load, security, and product quality workflows.",
  keywords: [
    "Ahsan Uddin",
    "Software Test Engineer",
    "QA Automation",
    "Playwright",
    "UI Testing",
    "API Testing",
    "Performance Testing",
  ],
  authors: [{ name: "Ahsan Uddin" }],
  creator: "Ahsan Uddin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahsanuddin.netlify.app",
    title: "Ahsan Uddin | Software Test Engineer",
    description:
      "Software Test Engineer focused on manual and automation testing across UI, API, load, security, and product quality workflows.",
    siteName: "Ahsan Uddin",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ahsan Uddin Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Uddin | Software Test Engineer",
    description:
      "Building reliable software quality through UI, API, load, and security testing.",
    images: ["/preview.png"],
    creator: "@ahsanuddin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${inter.variable} ${ibm_sans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04] dark:opacity-[0.05] bg-noise"></div>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
