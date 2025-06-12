import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MBTI 테스트",
  description: "팩폭과 귀여움 사이, 당신의 성향은?",
  openGraph: {
    title: "MBTI 테스트",
    description: "팩폭과 귀여움 사이, 당신의 성향은?",
    images: [
      {
        url: "https://mbti-test-app.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "MBTI 썸네일",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
