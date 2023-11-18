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

export const collections = { blog };
