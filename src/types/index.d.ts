import z from 'zod'
import { CurrencySchema,CryptoCurrencyResponseSchema } from '../schema/cryptoSchema'

export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
