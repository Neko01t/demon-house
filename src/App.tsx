import { useState } from 'react'
import Layout from './layout/MainLayout'
import Login from './pages/login.tsx'
import Signup from './pages/signup.tsx'
import Home from './pages/home.tsx'
function App() {
  const [count, setCount] = useState(0)
  function pop(){
    console.log('bop');
  }
  const [email, setEmail] = useState('');
  const [currentForm, setCurrentForm] = useState<'login' | 'signup' | 'home' | 'contact' | 'about'>('home');
//  /^[^\s@]+@[^\s@]+\.[^\s@]+$/   : Email
  return (
    <>
      <Layout onNavigate={setCurrentForm} >
      {currentForm === 'home' && <Home />}
      {currentForm === 'login' && <Login onSwitchForm={setCurrentForm} />}
      {currentForm === 'signup' && <Signup onSwitchForm={setCurrentForm} />}
      </ Layout>
    </>
  )
}

export default App
