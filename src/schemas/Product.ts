import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().or(z.number()),
  name: z.string(),
  price: z.number().positive(),
  category: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
})

export type ProductType = z.infer<typeof ProductSchema>
