import { useMemo } from "react";
import { useCryptoStore } from "../zustand/store"

export default function CryptoPriceDisplay() {

  const { result } = useCryptoStore();

  const hasResult = useMemo(()=> !Object.values(result).includes('') ,[result]);

  return (
    <div className="mt-5 flex flex-col gap-y-4 ">
      { hasResult &&  
        (<>
          <h2 className="text-center text-3xl">Quotation</h2>
          <div className="grid grid-cols-2 items-center gap-20">
            <img alt={`Image Crypto`}  src={`https://cryptocompare.com/${result.IMAGEURL}`} className="h-48 w-40" />
            <div className="flex flex-col gap-y-2">
              <p className="mr-1 font-medium" >Price: <span className="font-semibold" >{result.PRICE}</span></p>
              <p className="mr-1 font-medium" >High Price: <span className="font-semibold" >{result.HIGHDAY}</span></p>
              <p className="mr-1 font-medium" >Low Price: <span className="font-semibold" >{result.LOWDAY}</span></p>
              <p className="mr-1 font-medium" >Variation: <span className="font-semibold" >{result.CHANGEPCT24HOUR}%</span></p>
              <p className="mr-1 font-medium" >Last update: <span className="font-semibold" >{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>) 
      }
    </div>
  )
}
