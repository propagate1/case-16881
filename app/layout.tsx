import type { Metadata } from "next";
import { M_PLUS_1p, Noto_Sans_JP } from "next/font/google";

import "./globals.css";

const headingFont = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-heading",
});

const bodyFont = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "レンタルビジョン | 初期費用0円で始めるLEDビジョン | Vista Japan株式会社②",
  description:
    "初期費用0円、最短1ヶ月から利用可能、36ヶ月後は資産になるレンタルビジョン。工事不要で置くだけのLEDビジョンを全国対応で案内します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
