import React from "react";

interface buttonProps{
  label: string;
  onClick: ()=>void;
}
const Button = ({label, onClick}: buttonProps) =>{
  return (
    <button onClick={onClick}
    className="w-full px-5 py-3 font-semibold rounded-xl
             border border-[#6751a5] text-[#6751a5]
             hover:bg-[#6751a5] hover:text-white transition">
      <span className="relative z-10">{label}</span>
    </button>
  )
}
export default Button;
