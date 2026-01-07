import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "運動人格測驗 | Sports MBTI",
  description: "透過 28 道運動情境題目，發現你的運動人格類型，找到最適合你的訓練方式和運動項目",
  keywords: ["MBTI", "運動人格", "運動心理", "人格測驗", "訓練建議"],
  openGraph: {
    title: "運動人格測驗 | Sports MBTI",
    description: "發現你的運動人格類型",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
