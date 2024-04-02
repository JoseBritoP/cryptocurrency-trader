import z from 'zod'
import { CurrencySchema,CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from '../schema/cryptoSchema'

export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
