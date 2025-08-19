import { useState } from 'react'
import Button from './components/Button'
import Layout from './layout/MainLayout'
import Input from './components/Input'
import Navelment from './components/NavigatingButton'
function App() {
  const [count, setCount] = useState(0)
  function pop(){
    console.log('bop');
  }
  const [email, setEmail] = useState('');
//  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return (
    <>
    <div>
      <Layout />
    <Input type='text' value={email} label='Email'
       onChange={(e)=>setEmail(e.target.value)}
        regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
        errorMessage='Enter the correct email'
     />
      <Button label='boka' onClick={pop} />

      <p className='text-3xl underline '>tag test tailwind css </p>
    </div>
    </>
  )
}

export default App
