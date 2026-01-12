import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Grerth',
  description: 'Just for fun!',
  metadataBase: new URL(SITE_URL),
  icons: [
    {
      rel: 'icon',
      url: '/images/favicon.ico',
      sizes: '48x48',
      type: 'image/x-icon'
    },
    {
      rel: 'icon',
      url: '/images/logo.svg',
      sizes: 'any',
      type: 'image/svg+xml'
    },
    {
      rel: 'icon',
      url: '/images/icon-16x16.png',
      sizes: '16x16',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/images/icon-32x32.png',
      sizes: '32x32',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/images/icon-48x48.png',
      sizes: '48x48',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/images/icon-64x64.png',
      sizes: '64x64',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/images/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png'
    }
  ],
  appleWebApp: {
    title: 'Grerth',
    capable: true
  },
  openGraph: {
    siteName: 'Grerth',
    url: '/'
  },
  manifest: '/site.webmanifest'
};
