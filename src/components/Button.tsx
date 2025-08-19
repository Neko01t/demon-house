import React from "react";

interface buttonProps{
  label: string;
  onClick: ()=>void
}
const Button = ({label, onClick}: buttonProps) =>{
  return (
    <button onClick={onClick}
    className="px-5 py-3 font-semibold rounded-full
    overflow-hidden transition text-[#ffff] bg-[#6751a5]
    hover:bg-[#594391] active:bg-[#4a367a]"
    >
      <span className="relative z-10">{label}</span>
    </button>
  )
}
export default Button;
