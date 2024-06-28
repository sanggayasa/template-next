"use client"
import { ChangeEvent, useState } from "react";

export default function InputText ({ 
  className, 
  labelName, 
  disabled, 
  messageError, 
  value, 
  setValue, 
  type = 'text', 
  isLoading = false, 
  id ,
  placeholder,
  required,
  name,
  maxLength,
  minLength,
  autoComplete,
  styleLabel,
  styleInput,
  styleTooltip,
  pattern
} : Readonly<{ 
  className? : string, 
  labelName : string, 
  disabled? : boolean, 
  messageError? : string, 
  value : any, 
  setValue : any, 
  type? : string, 
  isLoading? : any, 
  id? : any,
  placeholder?: string,
  required?: boolean,
  name?: string,
  maxLength?:number,
  minLength?:number,
  autoComplete?:string,
  styleLabel?:string,
  styleInput?:string,
  styleTooltip?:string,
  pattern?:string
}> ) {
  
  const handleNameInputChange = (dataName: ChangeEvent<HTMLInputElement>) => {
    if(setValue){
      setValue(dataName.target.value);
    }else{
      value = dataName.target.value
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => setShowPassword(!showPassword);

  const password = showPassword ? 'text' : 'password';
  const toggleIcon = showPassword ? 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
    :
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg> ;

  return (
        <div>
            <div className="">
                <label htmlFor={labelName} className={ styleLabel ?? 'inline-block mb-2 ml-1 font-bold text-md text-slate-700  '} > {labelName || 'labelName'}</label>
                <div className="flex">
                { isLoading
                  ? <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-6 py-1">
                          <div className="h-10 bg-slate-200 rounded"></div>
                      </div>
                  </div>
                  : <input 
                    placeholder={placeholder}
                    id={id} 
                    disabled={disabled} 
                    type={type === "password" ? password : type} 
                    name={name}
                    value={value} 
                    onChange ={handleNameInputChange} 
                    className={`${messageError ? 'focus:border-red-300 focus:ring-red-300 border-red-300' : 'focus:border-blue-300 border-gray-300'} focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid bg-white bg-clip-padding px-3 py-2.5 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed ${className}`} 
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    autoComplete={autoComplete}
                    pattern={pattern}
                  />
                }
                {
                  type ==="password" &&
                  <div className="flex flex-row-reverse">
                    <div 
                    tabIndex={0}
                    onClick={()=>handleToggleVisibility()} 
                    onKeyDown={(event) => {
                      // Trigger the click event handler when the Enter key is pressed
                      if (event.key === 'Enter') {
                        handleToggleVisibility();
                      }
                    }}
                    className={styleInput ?? `absolute pt-2 text-gray-600 pr-2`}>
                      {toggleIcon}
                    </div>
                  </div>
                }
                </div>
            </div>
            {
                messageError && <span className={styleTooltip ?? "flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"}>
                    {messageError}
                </span>
            }
        </div>
  )
}


