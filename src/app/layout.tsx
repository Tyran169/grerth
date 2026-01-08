import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  metadataBase: new URL('https://grerth.netlify.app'),
  title: 'Grerth',
  description: 'Just for fun!',
  appleWebApp: {
    title: 'Grerth',
    capable: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main-app">{children}</main>
          <Toaster closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
