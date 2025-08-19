import { React, useState } from "react";
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
<div className="flex justify-center items-center min-h-screen text-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

    <form className="space-y-4">
      <Input
        type="text"
        value={email}
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
        errorMessage="Enter a valid email"
      />

      <Input
        type="password"
        value={pass}
        label="Password"
        onChange={(e) => setPass(e.target.value)}
        regex={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\$%&!#()])[A-Za-z\d.\$%&!#()]{8,64}$/}
        errorMessage="Password must include A-Z, a-z, number & symbol"
      />

      <Button
        label="Login"
        className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        onClick={() => console.log("Login clicked")}
      />
    </form>

    {/* Signup link */}
    <p className="text-center text-sm text-gray-600 mt-6">
      Don’t have an account?{" "}
      <a href="/signup" className="text-blue-600 font-semibold hover:underline">
        Sign up
      </a>
    </p>
  </div>
</div>
  );
};

export default Login;

