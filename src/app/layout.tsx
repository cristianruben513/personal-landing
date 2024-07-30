import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cristian Ruben - Software Engineer",
  description: "My Personal Landing Page",
  icons: "/images/profile.jpeg",
  openGraph: {
    images: "/images/aulianza.webp",
    url: "https://cristianfigue.com",
    siteName: "Cristian Ruben - My Personal Landing Page",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(sora.className)}>
        <div className="min-h-screen md:min-h-fit max-w-[480px] mx-auto bg-white md:shadow-xl md:rounded-lg md:my-3 ">
          {children}
        </div>
      </body>
    </html>
  );
}
