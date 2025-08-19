import { React , useState } from 'react';
interface inputProps{
  label:string;
  type?:string;
  value:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regex?:RegExp;
  errorMessage?:string;
};
// regex for email /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export default function Input({
  label,
  type='text',
  value,
  onChange,
  regex,
  errorMessage='Invalid Input',
}: inputProps){
    const [labelForm, setLableForm] = useState(false);
    function handleLoseFocus(){
      setTouched(true);
      setLableForm(false);
      console.log("omasa");
    }
//#1c1b21
    const [touched,setTouched] = useState(false);
    const  isValid = regex ? regex.test(value) : true;
    return (
      <div className=' text-[#1c1b21] mb-4 mx-5'>
        <label className={`font-md transition-all duration-300 relative ml-3
          ${labelForm || value ? "top-0 text-sm" : "top-9 text-[#49444e]" } `} >
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={handleLoseFocus}
          onFocus={()=>setLableForm(true)}
          className={`w-full border rounded-md p-2 py-3 outline-none bg-[#e6e0e9]
          ${!isValid && touched ? "border-red-500" : "border-gray-300"}
          focus:ring-2 focus:ring-blue-500`}
        />
        {!isValid && touched && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    );
}

