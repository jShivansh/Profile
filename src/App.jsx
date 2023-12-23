import { useState } from 'react'
import { Header, Footer } from './Components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1 className='text-center text-3xl bg-black text-white'>Hello Shivansh</h1>
      <Footer />
    </>
  )
}

export default App
