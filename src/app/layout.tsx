import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/nav/main-nav";
import { MobileNav } from "@/components/nav/mobile-nav";
import { SiteFooter } from "@/components/footer/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COMMAND LABS - Digital Transformation Agency",
  description: "Transforming businesses through tailored solutions",
  keywords: ["AI", "Automation", "Digital Transformation", "Machine Learning", "Business Intelligence"],
  openGraph: {
    title: "COMMAND LABS - Digital Transformation Agency",
    description: "Transforming businesses through tailored solutions",
    url: "https://cmdlabs.io",
    siteName: "COMMAND LABS",
    images: [
      {
        url: "/cursive_c_512x512.png",
        width: 512,
        height: 512,
        alt: "COMMAND LABS Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COMMAND LABS - Digital Transformation Agency",
    description: "Transforming businesses through tailored solutions",
    images: ["/cursive_c_512x512.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased bg-light text-[#111]`}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full bg-red-800 text-white border-b border-red-800 shadow">
            <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between px-4 md:px-6">
              <MainNav />
              <MobileNav />
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
