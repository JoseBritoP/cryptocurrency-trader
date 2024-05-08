import { useState,ChangeEvent, FormEvent } from "react";
import { currencies } from "../data/currencies"
import { useCryptoStore } from "../zustand/store"
import { Pair } from "../types";
import Alert from "./Alert";

export default function CryptoSearchForm() {

  const [pair,setPair] = useState<Pair>({
    currency:'',
    cryptocurrency:''
  })

  const [error,setError] = useState('')
  const { cryptoCurrencies,fetchData } = useCryptoStore();

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setPair({
      ...pair,
      [name]:value
    });
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(pair).includes('')){
      setError('All fields are required');
      setTimeout(()=>{
        setError('')
      },2000)
      return
    }
    setError('');
    fetchData(pair)

  }

  return (
    <form onSubmit={handleSubmit}>
      <legend className="flex flex-col items-center justify-center gap-y-5" >
        {error !== '' && <Alert message={error}/>}
        <div className="flex flex-col gap-5 justify-evenly">
          <label htmlFor="currency" className="font-semibold text-xl text-center">Currency: </label>
          <select name="currency" id="currency" value={pair.currency} onChange={handleChange} className="py-1 px-2 text-gray-700 rounded-md">
            <option value="---"> -- Select the currency --</option>
            {currencies.map(({code,name})=>(
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-5 justify-evenly">
          <label htmlFor="cryptocurrency" className="font-semibold text-xl text-center">Crypto Currency: </label>
          <select name="cryptocurrency" id="cryptocurrency" value={pair.cryptocurrency} onChange={handleChange} className="py-1 px-2 text-gray-700 rounded-md">
            <option value="---"> -- Select the currency --</option>
            {cryptoCurrencies.map(({CoinInfo:{FullName,Name}})=>(
              <option key={Name} value={Name}>{FullName}</option>
            ))}
          </select>
        </div>
        <button aria-label="Check currency" className="hover:bg-[#123866] bg-[#1458aa] transition-colors 300 ease-in-out py-2 px-4 rounded-md text-xl font-semibold border-[1px] border-gray-500 uppercase mt-2">Check currency</button>
      </legend>
    </form>
  )
}
