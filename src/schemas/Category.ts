import { z } from 'zod';

export const BaseCategorySchema = z.object({
  id: z.string(),
  categoryName: z.string(),
  categoryNameIcon: z.string(),
});

export type CategoryType = z.infer<typeof BaseCategorySchema>;
