import { Metadata } from 'next';

import favicon from '@/assets/images/favicon.ico';
import logoSvg from '@/assets/images/logo.svg';
import icon16x16 from '@/assets/images/icon-16x16.png';
import icon32x32 from '@/assets/images/icon-32x32.png';
import icon48x48 from '@/assets/images/icon-48x48.png';
import icon64x64 from '@/assets/images/icon-64x64.png';
import icon96x96 from '@/assets/images/icon-96x96.png';
import appleIcon from '@/assets/images/apple-icon.png';
import ogImage from '@/assets/images/og-image.png';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';

export const metadata: Metadata = {
  title: 'Grerth',
  description: 'Just for fun!',
  metadataBase: new URL(SITE_URL),
  icons: [
    {
      rel: 'icon',
      url: favicon.src,
      sizes: '48x48',
      type: 'image/x-icon'
    },
    {
      rel: 'icon',
      url: logoSvg.src,
      sizes: 'any',
      type: 'image/svg+xml'
    },
    {
      rel: 'icon',
      url: icon16x16.src,
      sizes: '16x16',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: icon32x32.src,
      sizes: '32x32',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: icon48x48.src,
      sizes: '48x48',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: icon64x64.src,
      sizes: '64x64',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: icon96x96.src,
      sizes: '96x96',
      type: 'image/png'
    },
    {
      rel: 'apple-touch-icon',
      url: appleIcon.src,
      sizes: '180x180',
      type: 'image/png'
    }
  ],
  appleWebApp: {
    title: 'Grerth',
    capable: true
  },
  openGraph: {
    title: 'Grerth',
    description: 'Just for fun!',
    siteName: 'Grerth',
    url: '/',
    type: 'website',
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: 'Site Preview Image',
        type: 'image/png'
      }
    ]
  },
  manifest: '/site.webmanifest'
};
