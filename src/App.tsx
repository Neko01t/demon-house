import { useState } from 'react'
import Button from './components/Button'
import Layout from './layout/MainLayout'
import Input from './components/Input'
import Navelment from './components/NavigatingButton'
import Login from './pages/login.tsx'
import Signup from './pages/signup.tsx'
function App() {
  const [count, setCount] = useState(0)
  function pop(){
    console.log('bop');
  }
  const [email, setEmail] = useState('');
  const [currentForm, setCurrentForm] = useState<'login' | 'signup'>('login');

//  /^[^\s@]+@[^\s@]+\.[^\s@]+$/   : Email
  return (
    <>
      <Layout >

      {currentForm === 'login' && <Login onSwitchForm={setCurrentForm} />}
      {currentForm === 'signup' && <Signup onSwitchForm={setCurrentForm} />}

      </ Layout>
    </>
  )
}

export default App
