import { React } from 'react';
export default function Footer() {
  return (
    <footer className='w-full py-4 absolute bottom-0 border-gray-300 border-t-2'>
      <div className='flex justify-center'>
  <div className="max-w-4xl mx-auto flex flex-row items-center space-y-2 text-center text-sm text-gray-600">
    <p className="px-4 mt-2" ><span className="font-semibold ">Name:</span>Cyber</p>
    <p className="px-4" ><span className="font-semibold">Sponsored:</span>HardStudio</p>
    <p className="px-4" >© {new Date().getFullYear()} @ImmortalNeko(Moon)</p>
  </div>
      </div>
      {/* https://youtu.be/qg9IMJKnIAA?si=t3eTZhPTyrmRmNEa */}
    </footer>
  )
}
