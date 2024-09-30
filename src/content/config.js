// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const newsCollection = defineCollection({ 
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    previewText: z.string(),
    image: image().optional(),
  })
});

const eventsCollection = defineCollection({ 
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    category: z.enum(['Conference', 'Hackathon', 'Webinar', 'Training']), // There might be more
    start: z.date(),
    end: z.date(),
    location: z.object({
      description: z.string(),
      organizer: z.string().optional(),
      url: z.string().url().optional(),
      image: image().optional(),
    }),
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'news': newsCollection,
  'events': eventsCollection,
};