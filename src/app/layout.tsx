import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const handwritingFont = localFont({
  src: "./fonts/ReenieBeanie-Regular.ttf",
  variable: "--font-handwriting",
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Digital Present - Skicka en digital blomma',
  description: 'Skicka en personlig digital blomma med ett gulligt AI-genererat meddelande till någon du bryr dig om.',
  keywords: ['digital present', 'digital blomma', 'AI hälsning', 'personligt meddelande', 'virtuell gåva'],
  openGraph: {
    title: 'Digital Present - Skicka en digital blomma',
    description: 'Skicka en personlig digital blomma med ett gulligt AI-genererat meddelande.',
    url: 'https://digitalpresent.se',
    siteName: 'Digital Present',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Present preview',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#191919'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handwritingFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
