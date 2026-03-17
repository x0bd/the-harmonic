import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const essaysCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    date: z.coerce.date(),
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
