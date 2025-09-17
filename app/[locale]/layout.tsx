import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RequestADemo from "@/components/layout/RequestADemo";
import { ToastContainer } from 'react-toastify';
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EvoCloud",
  description:
    "Contribute EvoCloud Platform Guides Documentation and guides to deploy, configure, manage, and monitor the EvoCloud Platform on your IaaS of choice.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          <ToastContainer />
          <RequestADemo/>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
