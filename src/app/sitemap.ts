import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Using your Vercel deployment URL
  const baseUrl = 'https://webworkflows-owh1.vercel.app';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/website-designer-hyderabad`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/inquiry`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
