import { React } from 'react';
export default function Footer() {
  return (

<footer className="w-full py-2 border-t-2 border-gray-300 bg-gray-900 text-gray-300">
  <div className="flex justify-center">
    <div className="max-w-4xl mx-auto flex flex-row items-center space-x-4 text-center text-sm">
      <p className="px-2 mt-1">
        <span className="font-semibold">Name:</span> Cyber
      </p>
      <p className="px-2">
        <span className="font-semibold">Sponsored:</span> HardStudio
      </p>
      <p className="px-2">
        © {new Date().getFullYear()} @ImmortalNeko(Moon)
      </p>
    </div>
  </div>
      {/* https://youtu.be/qg9IMJKnIAA?si=t3eTZhPTyrmRmNEa */}
</footer>
  )
}
