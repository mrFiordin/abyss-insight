import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Якщо колись буде адмінка
    },
    sitemap: 'https://abyss-insight.com/sitemap.xml',
  };
}