import type { Metadata } from 'next';
import './globals.css';
import SpiderSwingingBanner from '@/components/ui/SpiderSwingingBanner';
import WebHanging from '@/components/ui/WebHanging';
import SpiderCursor from '@/components/ui/SpiderCursor';  // ✅ Import cursor

export const metadata: Metadata = {
  title: 'Tilasmi Subedi | Portfolio — Spider-Man Theme',
  description: 'Portfolio of Tilasmi Subedi — BSc (Hons) Computing student with experience in SEO, web development, and AI. 🕷️',
  keywords: ['Tilasmi Subedi', 'Portfolio', 'Web Developer', 'Computing Student', 'Spider-Man Theme'],
  authors: [{ name: 'Tilasmi Subedi' }],
  openGraph: {
    title: 'Tilasmi Subedi | Portfolio',
    description: 'Computing student & web developer with a passion for creating amazing digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased web-pattern cursor-none">
        {/* ✅ Spider-Man Custom Cursor */}
        <SpiderCursor />
        
        {children}
        
        {/* Spider-Man Swinging in corner */}
        <SpiderSwingingBanner />
        
        {/* Small spider hanging in bottom left corner */}
        <div className="fixed bottom-8 left-4 z-40 hidden sm:block pointer-events-none">
          <WebHanging size={40} webLength={60} />
        </div>
        
        {/* Small spider in top left */}
        <div className="fixed top-24 left-4 z-40 hidden lg:block pointer-events-none opacity-50">
          <WebHanging size={30} webLength={50} />
        </div>
      </body>
    </html>
  );
}