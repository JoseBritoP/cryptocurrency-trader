import z from 'zod'
import { CurrencySchema } from '../schema/cryptoSchema'

export type Currency = z.infer<typeof CurrencySchema>