import './App.css'
import CryptoSearchForm from './components/CryptoSearchForm'

function App() {

  return (
    <main className='max-w-[60rem] w-[95%] my-0 mx-auto text-white'>
      <section className='my-0 mx-auto'>
        <h1 className='mt-20 font-bold text-6xl text-center'>Cryptocurrency <span className='block text-primary'>Quote</span></h1>
      </section>
      <section className='mt-20 py-24 px-8 bg-slate-950 border-2 rounded-md shadow-md'>
        <CryptoSearchForm/>
      </section>
    </main>
  )
}

export default App
