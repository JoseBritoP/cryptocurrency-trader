import { currencies } from "../data/currencies"

export default function CryptoSearchForm() {
  return (
    <form className="flex flex-col items-center justify-center gap-y-5">
      <div className="flex flex-col gap-5 justify-evenly">
        <label htmlFor="currency" className="font-semibold text-xl text-center">Currency: </label>
        <select name="currency" id="currency" className="py-1 px-2 text-gray-700 rounded-md">
          <option value="---"> -- Select the currency --</option>
          {currencies.map(({code,name})=>(
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-5 justify-evenly">
        <label htmlFor="cryptocurrency" className="font-semibold text-xl text-center">Crypto Currency: </label>
        <select name="cryptocurrency" id="cryptocurrency" className="py-1 px-2 text-gray-700 rounded-md">
          <option value="---"> -- Select the currency --</option>
        </select>
      </div>
      <button className="hover:bg-[#123866] bg-[#1458aa] transition-colors 300 ease-in-out py-2 px-4 rounded-md text-xl font-semibold border-[1px] border-gray-500 uppercase mt-2">Check currency</button>
    </form>
  )
}
