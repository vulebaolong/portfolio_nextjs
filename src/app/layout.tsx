import Providers from "@/common/providers/Provider";
import { TITLE_BASE } from "@/constants/app.constant";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "../common/styles/globals.css";

const interFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-inter",
});
const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: `${TITLE_BASE} | portfolio`,
  description: "Web portfolio by developer long",
  openGraph: {
    title: `${TITLE_BASE} | portfolio`,
    images: ["/meta.png"],
    description: "Web portfolio by developer long",
    url: "",
  },
  twitter: {
    images: ["/meta.png"],
    card: "summary_large_image",
    title: `${TITLE_BASE} | portfolio`,
    description: "Web portfolio by developer long",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFont.variable} ${soraFont.variable}`}>
      <body
        className={`${interFont.className}`}
        style={{
          backgroundColor: "black",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
