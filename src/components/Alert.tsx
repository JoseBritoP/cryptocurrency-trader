export default function Alert({message}:{message:string}) {
  return (
    <div className='absolute top-80 border-2 p-2 rounded-lg border-red-300'>
      <p className='font-bold text-xl'>
       {message}
      </p>
    </div>
  )
}
