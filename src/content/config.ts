import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    releaseDate: z.date(),
    image: z.object({ url: z.string(), alt: z.string() }),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
  }),
});

const stack = defineCollection({
  type: "data",
  schema: z.object({
    sortOrder: z.number(),
    name: z.string(),
    caption: z.string(),
    description: z.string(),
    url: z.string().url(),
    icon: z.object({ url: z.string(), alt: z.string() }),
  }),
});

export const collections = { blog, projects, stack };
