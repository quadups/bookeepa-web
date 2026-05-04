export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bookeepa.com";

export const faqItems = [
  {
    question: "What is Bookeepa?",
    answer:
      "Bookeepa is a mobile-first bookkeeping and WhatsApp follow-up platform for African SMEs.",
  },
  {
    question: "Who is Bookeepa for?",
    answer:
      "Bookeepa is built for retail shops, food vendors, logistics teams, market sellers, and accountants supporting small businesses.",
  },
  {
    question: "What problem does Bookeepa solve?",
    answer:
      "Bookeepa helps small businesses record transactions, track customer balances, and follow up on unpaid credit sales.",
  },
  {
    question: "Does Bookeepa replace full accounting software?",
    answer:
      "Bookeepa starts with simple money tracking, invoices, customer balances, and reminders before advanced accounting complexity.",
  },
];

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bookeepa",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description:
      "Bookeepa helps African SMEs track money, customer balances, invoices, and WhatsApp reminders.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bookeepa",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bookeepa",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: siteUrl,
    description:
      "Simple bookkeeping, debt tracking, customer balance management, invoicing, and WhatsApp reminders for African SMEs.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    audience: {
      "@type": "Audience",
      audienceType: "African small and medium-sized businesses",
    },
    featureList: [
      "Simple bookkeeping",
      "Debt tracking",
      "Customer management",
      "Transaction tracking",
      "Invoice creation",
      "WhatsApp reminders",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];
