import type { MetadataRoute } from 'next';

const SITE_URL = 'https://grerth.netlify.app';
const LAST_UPDATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_UPDATE,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${SITE_URL}/dashboard`,
      lastModified: LAST_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${SITE_URL}/toast`,
      lastModified: LAST_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.6
    }
  ];
}
