import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/cryptoSchema";
import { Pair } from "../types";

export async function getCryptos(){
  const limit = 20;
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=USD`
  const { data: { Data } } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if(result.success){
    return result.data
  }
}

export async function fetchCurrencyCryptosPrice({currency,cryptocurrency}:Pair){
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

  const { data: { DISPLAY } } = await axios.get(url);
  const result = CryptoPriceSchema.safeParse(DISPLAY[cryptocurrency][currency])
  if(result.success){
    return result.data
  }
}