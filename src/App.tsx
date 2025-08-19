import { useState } from 'react'
import Button from './components/Button'
import Layout from './layout/MainLayout'
import Input from './components/Input'
import Navelment from './components/NavigatingButton'
import Login from './pages/login.tsx'
function App() {
  const [count, setCount] = useState(0)
  function pop(){
    console.log('bop');
  }
  const [email, setEmail] = useState('');
//  /^[^\s@]+@[^\s@]+\.[^\s@]+$/   : Email

  return (
    <>
      <Layout >
      <Login />
      </ Layout>
    </>
  )
}

export default App
