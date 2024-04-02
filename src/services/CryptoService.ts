import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schema/cryptoSchema";

export async function getCryptos(){
  const limit = 20;
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=USD`
  const { data: { Data } } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if(result.success){
    return result.data
  }
}
