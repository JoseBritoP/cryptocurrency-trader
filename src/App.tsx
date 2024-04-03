import { useEffect } from 'react';
import './App.css'
import CryptoSearchForm from './components/CryptoSearchForm'
import { useCryptoStore } from './zustand/store'
import CryptoPriceDisplay from './components/CryptoPriceDisplay';
function App() {

  const { fetchCryptos } = useCryptoStore();

  
  useEffect(()=>{
    fetchCryptos()
  },[]);
  
  return (
    <main className='max-w-[60rem] w-[95%] mx-auto text-white'>
      <section className='my-0 mx-auto pt-20'>
        <h1 className='font-bold text-6xl text-center'>Cryptocurrency <span className='block text-primary'>Quote</span></h1>
      </section>
      <section className='flex flex-col items-center gap-y-4 mt-20 py-10 px-5 bg-slate-950 border-2 rounded-md shadow-md'>
        <CryptoSearchForm/>
        <CryptoPriceDisplay/>
      </section>
    </main>
  )
}

export default App
