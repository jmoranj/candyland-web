import { z } from 'zod'

export const BaseProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  category: z.string(),
  quantity: z.number().positive().default(1),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
})

export type ProductType = z.infer<typeof BaseProductSchema>
