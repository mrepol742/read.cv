import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { promises as fs } from 'fs';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export async function generateMetadata(): Promise<Metadata> {
  const file = await fs.readFile(process.cwd() + '/public/content/profileData.json', 'utf8');
  const cv = JSON.parse(file);
  return {
    title: cv.general.displayName,
    description: cv.general.byline || '',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="hostname" content="mrepol742-read-cv.vercel.app" />
        <link rel="canonical" href="https://mrepol742-read-cv.vercel.app" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
