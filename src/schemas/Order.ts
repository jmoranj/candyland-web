import { z } from 'zod'
import { BaseProductSchema } from './Product'

export const OrderSchema = z.object({
  products: z.array(BaseProductSchema),
})

export type OrderType = z.infer<typeof OrderSchema>
