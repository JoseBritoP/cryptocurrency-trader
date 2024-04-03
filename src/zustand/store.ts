import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPrice, Pair } from "../types";
import { getCryptos,fetchCurrencyCryptosPrice } from "../services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[]
  result:CryptoPrice
  fetchCryptos: () => Promise<void>
  fetchData: (pair:Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
  cryptoCurrencies: [],
  result: {
    IMAGEURL:'',
    PRICE:'',
    HIGHDAY:'',
    LOWDAY:'',
    CHANGEPCT24HOUR:'',
    LASTUPDATE:''
  },
  fetchCryptos: async() => {
    const cryptoCurrencies = await getCryptos();
    set(()=>({
      cryptoCurrencies
    }))
  },
  fetchData:async(pair) => {
    const result = await fetchCurrencyCryptosPrice(pair);
    // console.log(result)
    set(()=>({
      result
    }));
  }
})));