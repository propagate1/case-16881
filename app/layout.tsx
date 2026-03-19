import "../lib/fonts/_active.css";
import "../lib/fonts/_vars.css";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "レンタルビジョン｜初期費用0円・置くだけ集客のLEDビジョン｜Vista Japan株式会社②",
  description: "レンタルなのに資産になるLEDビジョン。初期費用0円、月々27,500円〜、3年後資産化。工事不要で置くだけで集客できるデジタル看板。全国対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="antialiased font-body"
      >
        {children}
        <Script
          src="https://site-annotator.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
