import type { Metadata } from "next";
import { siteUrl } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Bookeepa",
  title: {
    default: "Bookeepa | WhatsApp bookkeeping for African SMEs",
    template: "%s | Bookeepa",
  },
  description:
    "Bookeepa helps African SMEs track money, customer balances, invoices, and WhatsApp reminders without complex accounting software.",
  keywords: [
    "Bookeepa",
    "African SME bookkeeping",
    "WhatsApp bookkeeping",
    "debt tracking app",
    "customer balance tracking",
    "invoice reminders",
    "small business finance Africa",
    "Nigerian SME bookkeeping",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bookeepa | Track money. Follow up on WhatsApp.",
    description:
      "Mobile-first bookkeeping, customer balances, invoices, and reminders for African SMEs.",
    url: siteUrl,
    siteName: "Bookeepa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookeepa | WhatsApp bookkeeping for African SMEs",
    description:
      "Track transactions, customer balances, invoices, and WhatsApp follow-ups from one simple workspace.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
