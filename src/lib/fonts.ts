import localFont from 'next/font/local';

export const GeistSans = localFont({
  src: [
    {
      path: '../assets/fonts/Geist.woff2',
      weight: '100 900',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Geist-Italic.woff2',
      weight: '100 900',
      style: 'italic'
    }
  ],
  variable: '--font-sans',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Inter',
    'Segoe UI',
    'Roboto',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ]
});

export const GeistMono = localFont({
  src: [
    {
      path: '../assets/fonts/GeistMono.woff2',
      weight: '100 900',
      style: 'normal'
    },
    {
      path: '../assets/fonts/GeistMono-Italic.woff2',
      weight: '100 900',
      style: 'italic'
    }
  ],
  variable: '--font-mono',
  adjustFontFallback: false,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Roboto Mono',
    'Menlo',
    'Monaco',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Courier New',
    'monospace'
  ]
});

export const fontVariables = `${GeistSans.variable} ${GeistMono.variable}`;
