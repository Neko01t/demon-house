import { React, useState } from "react";
import Button from '../components/Button'
import Input from '../components/Input'
interface loginProps {
    onSwitchForm: (form: 'login' | 'signup') => void;
}
const Login = ({onSwitchForm}:loginProps) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password : pass
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\$%&!#()])[A-Za-z\d.\$%&!#()]{8,64}$/
    if (emailRegex.test(email) && passwordRegex.test(pass) ) {
     const data = new FormData(e.currentTarget);
      console.log("json :",loginData);
      console.log("sending -->", JSON.stringify(loginData))
      console.log("data sent to server (even tho their is no server yet)")
    }else {
      console.log("Enter right Stuff in Right place")
    }
  };

  return (
<div className="flex justify-center items-center h-[calc(100vh-64px)] text-gray-400">
  <div className="bg-white p-8 rounded-2xl w-96 bg-transparent border border-gray-400 focus-within:border-gray-600 shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="email"
        type="text"
        value={email}
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
        errorMessage="Enter a valid email"
      />

      <Input
        name="password"
        type="password"
        value={pass}
        label="Password"
        onChange={(e) => setPass(e.target.value)}
        regex={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\$%&!#()])[A-Za-z\d.\$%&!#()]{8,64}$/}
        errorMessage="Password must include A-Z, a-z, number & symbol"
      />

      <Button
        label="Login"
        onClick={() => console.log("Login clicked")}
      />
    </form>

    {/* Signup link */}
    <p className="text-center text-sm text-gray-600 mt-6">
      Don’t have an account?{" "}
      <span
        className="text-blue-600 font-semibold cursor-pointer hover:underline"
        onClick={() => onSwitchForm('signup')}>
        Sign up
      </span>
    </p>
  </div>
</div>
  );
};

export default Login;

