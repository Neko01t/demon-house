import {  useState,React }  from "react";
import Navelement from "./NavigatingButton";
import homeIcon from "../assets/homeIcon.svg"
import focusedHomeIcon from "../assets/homeIconFocus.svg"
import aboutIcon from "../assets/aboutIcon.svg";
import focusedAboutIcon from "../assets/aboutIconFocus.svg";
import contactIcon from "../assets/contactIcon.svg";
import focusedContactIcon from "../assets/contactIconFocus.svg";

export default function Navbar(){
  const  [hoverd, setHoverd]= useState("");
  return (
    <div className='flex justify-around items-center mb-5 py-6 h-20 px-2 relative top-0 w-full border-b-2 border-gray-300' >
      <div className=' text-ml font-bold'>
        My Navbar
      </div>
      <div>
        <ul className='flex items-center space-x-6' >
          <li className="cursor-pointer"
          onMouseEnter={() => setHoverd("home")}
          onMouseLeave={() => setHoverd("")}>
          <Navelement
            icon={homeIcon}
            isActive={hoverd === "home"} focusedIcon={focusedHomeIcon}
            label={'Home'}/>
          </li>
          <li
          onMouseEnter={() => setHoverd("about")}
          onMouseLeave={() => setHoverd("")}
          ><Navelement
            icon={aboutIcon}
            isActive={hoverd === "about"} focusedIcon={focusedAboutIcon}
            label={'About'}/>
          </li>
          <li
          onMouseEnter={() => setHoverd("contact")}
          onMouseLeave={() => setHoverd("")}
          ><Navelement
            icon={contactIcon}
            isActive={hoverd === "contact"} focusedIcon={focusedContactIcon}
            label={'Contact'}/>
          </li>
          {/*  https://youtu.be/jNUTxvki_d0?si=Gi0wO6l-fSXOosRi */}
          {/* <li className='transition cursor-pointer hover:text-gray-400'>Contacts</li>*/}
        </ul>
      </div>
    </div>
  )
}
