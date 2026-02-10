import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"] });

// --- ОНОВЛЕНІ МЕТАДАНІ ---
export const metadata: Metadata = {
  metadataBase: new URL('https://abyss-insight.com'), // Твій реальний домен
  title: {
    default: "Abyss Insight | Enterprise AI & Highload Infrastructure",
    template: "%s | Abyss Insight"
  },
  description: "We engineer Deep Tech solutions: Predictive Digital Twins, Autonomous Agents, and Highload Systems (Golang, K8s). Stop surfacing, start solving.",
  keywords: ["AI Development", "Highload Systems", "Golang", "Kubernetes", "Digital Twins", "Enterprise AI", "Software Architecture"],
  authors: [{ name: "Abyss Insight Team" }],
  creator: "Abyss Insight",
  
  // Налаштування для соцмереж (Telegram, LinkedIn, Facebook)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abyss-insight.com",
    title: "Abyss Insight | Enterprise AI & Highload Infrastructure",
    description: "Engineering Deep Tech solutions for complex industries. From R&D to Highload Production.",
    siteName: "Abyss Insight",
    images: [
      {
        url: "/og-image.jpg", // Картинка, яку ми створимо нижче
        width: 1200,
        height: 630,
        alt: "Abyss Insight - Deep Tech Infrastructure",
      },
    ],
  },
  
  // Налаштування для Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Abyss Insight | Enterprise AI",
    description: "Engineering Deep Tech solutions. Golang, K8s, AI.",
    images: ["/og-image.jpg"],
  },
  
  icons: {
    icon: "/icon.svg", // Твій новий фавікон
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020408] text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}