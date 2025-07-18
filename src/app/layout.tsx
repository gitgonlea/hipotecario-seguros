import type { Metadata } from "next";
import { Open_Sans, Inter } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./bootstrap-overrides.css";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Contratá tu Seguro de Salud | Hipotecario Seguros",
  description: "Hipotecario Seguros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}