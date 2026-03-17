import { z, defineCollection } from 'astro:content';

const essaysCollection = defineCollection({
  type: 'content', // v2.5+ allows 'content' | 'data'. We use 'content' for markdown/MDX
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    date: z.date(),
    readingTime: z.string(),
    category: z.string(),
    coverImage: z.string(),
    coverImageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'essays': essaysCollection,
};
