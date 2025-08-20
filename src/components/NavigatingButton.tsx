import { React } from 'react';
interface navlele{
  icon: string;
  isActive:boolean;
  focusedIcon: string;
  label: string;
  url?: string;
  onClick? : ()=>void;
}
export default function Navelment({focusedIcon, onClick ,isActive, icon, label ,url}:navlele){
  return (
    <div onClick={onClick} role="button" className="w-16 h-16 column flex-col inline-flex items-center justify-center group">
    {!isActive
      ?<img
      src={icon}
      alt={label}
      className="transition-opacity duration-300 opacity-100 cursor-pointer group-hover:opacity-0" />
      :<img
        src={focusedIcon}
        alt={label}
        className="transition-opacity duration-300 opacity-0 cursor-pointer group-hover:opacity-100" />}
    <label className="text-[#625b71] pt-2 text-xs cursor-pointer hidden group-hover:block" >{label}</label>
    </div>
  );}

