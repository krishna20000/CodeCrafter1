import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Script from 'next/script'; // ✅ Import Script
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCallButton } from '@/components/ui/FloatingCallButton';
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'CodeCrafter - Launch Your Website for Just ₹21/day',
  description: 'Custom web design, hosting, domain & 1-year support. Futuristic, dark-themed websites for startups and small businesses.',
  icons: {
    icon: 'https://i.postimg.cc/9MffWxM0/Chat-GPT-Image-Apr-27-2025-07-28-18-PM.png',
    apple: 'https://i.postimg.cc/9MffWxM0/Chat-GPT-Image-Apr-27-2025-07-28-18-PM.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        {/* === Zoho Marketing Snippet === */}
        <Script
          src="https://cdn-in.pagesense.io/js/60049282949/c756c005a5694bf5ad961ea6f1d75393.js"
          strategy="afterInteractive"
        />

        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <FloatingCallButton />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
