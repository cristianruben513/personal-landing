import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://me.cristianruben.com"),
  title: "Cristian Ruben - Software Engineer",
  description: "My Personal Linktree",
  icons: "/images/profile.jpeg",
  openGraph: {
    images: "/images/cover.webp",
    url: "https://me.cristianruben.com",
    siteName: "Cristian Ruben - Linktree",
    type: "website",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
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
