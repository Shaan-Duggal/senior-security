import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const scams = defineCollection({
  loader: glob({ base: './src/content/scams', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    riskLevelLabel: z.string(),
    excerpt: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    order: z.number().int()
  })
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(['guide', 'checklist', 'script']),
    printable: z.boolean(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    order: z.number().int()
  })
});

export const collections = { scams, guides };
