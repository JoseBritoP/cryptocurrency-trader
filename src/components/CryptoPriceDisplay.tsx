import { useMemo } from "react";
import { useCryptoStore } from "../zustand/store"

export default function CryptoPriceDisplay() {

  const { result } = useCryptoStore();

  const hasResult = useMemo(()=> !Object.values(result).includes('') ,[result]);
  console.log(hasResult)
  return (
    <div className="mt-5 ">
      { hasResult &&  
        (<>
          <h2 className="text-center text-2xl">Cotitzación</h2>
          <div className="grid grid-cols-2 items-center gap-4">
            <img alt={`Image Crypto`}  src={`https://cryptocompare.com/${result.IMAGEURL}`} className="w-full" />
            <div>
              <p className="mr-1 font-medium" >El precio es de: <span className="font-semibold" >{result.PRICE}</span></p>
              <p className="mr-1 font-medium" >El precio más alto es de: <span className="font-semibold" >{result.HIGHDAY}</span></p>
              <p className="mr-1 font-medium" >El precio más bajo es de: <span className="font-semibold" >{result.LOWDAY}</span></p>
              <p className="mr-1 font-medium" >Su variación es de: <span className="font-semibold" >{result.CHANGEPCT24HOUR}%</span></p>
              <p className="mr-1 font-medium" >Last update: <span className="font-semibold" >{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>) 
      }
    </div>
  )
}
