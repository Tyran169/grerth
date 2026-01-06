import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/* ---------- Metadata ---------- */

export const alt = 'GRERTH';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

/* ---------- Image ---------- */

export default async function OpenGraphImage() {
  const interBold = await readFile(
    join(process.cwd(), 'assets/fonts/Inter_24pt-Bold.ttf')
  );

  const interRegular = await readFile(
    join(process.cwd(), 'assets/fonts/Inter_24pt-Regular.ttf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          color: '#FFFFFF',
          backgroundColor: '#0B0B0E',
          overflow: 'hidden'
        }}
      >
        {/* Subtle vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 65%)'
          }}
        />

        {/* Watermark */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            left: 10,
            fontSize: 300,
            fontWeight: 700,
            letterSpacing: '-0.1em',
            color: 'rgba(255,255,255,0.03)',
            userSelect: 'none'
          }}
        >
          G
        </div>

        {/* Brand */}
        <div
          style={{
            fontSize: 124,
            fontWeight: 700,
            letterSpacing: '-0.045em',
            lineHeight: 1,
            textShadow: '0 8px 32px rgba(0,0,0,0.5)'
          }}
        >
          GRERTH
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 90,
            height: 6,
            borderRadius: 999,
            backgroundColor: '#6366F1',
            marginTop: 28
          }}
        />

        {/* Tagline */}
        <div
          style={{
            marginTop: 22,
            fontSize: 35,
            fontWeight: 400,
            color: '#B8B8B8',
            maxWidth: 760,
            lineHeight: 1.4
          }}
        >
          Just for fun — a playground for UI experiments.
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            right: 80,
            fontSize: 22,
            letterSpacing: '0.04em',
            color: '#6F6F6F'
          }}
        >
          grerth.netlify.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
          style: 'normal'
        },
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
          style: 'normal'
        }
      ]
    }
  );
}
