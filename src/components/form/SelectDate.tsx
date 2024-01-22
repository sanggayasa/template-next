import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker'
export default function SelectDate ({ 
  labelName, 
  messageError, 
  // value, 
  setValue, 
  disabled, 
  isLoading, 
  id 
} : Readonly<{
  labelName: any,
  messageError: string,
  // value: {
  //   startDate: string,
  //   endDate: string
  // },
  setValue?: Function,
  disabled: boolean,
  isLoading: boolean,
  id: string
}>){
  const currentDate = new Date()

  const [value, setChildValue] = useState<{ startDate: string; endDate: string }>({
    startDate: "",
    endDate: ""
  });; 

  const handleValueChange = (newValue: { startDate: Date | null; endDate: Date | null; }) => {
    console.log(newValue)
    const value = {
      startDate: newValue.startDate ? newValue.startDate.toString() : "", 
      endDate: newValue.endDate ? newValue.endDate.toString() : ""
    };

    setChildValue(value);
    setValue?.(newValue); 
  } 

  currentDate.setDate(currentDate.getDate() + 1)

  const formattedDate = currentDate.toISOString().split('T')[0]
  return (
                <div className="mb-4" id={id}>
                    <label htmlFor="username" className="ml-1 inline-block mb-2 font-bold text-xs text-slate-700 dark:text-white/80">{labelName || 'labelName'}</label>
                    {
                      isLoading
                        ? <div className="animate-pulse flex space-x-4">
                          <div className="flex-1 space-y-6 py-1">
                              <div className="h-10 bg-slate-200 rounded"></div>
                          </div>
                      </div>
                         : <div className={messageError ? 'border-2 border-solid rounded-xl border-red-300 -p-3' : ''}>
                        <Datepicker
                            minDate={new Date(formattedDate)}
                            separator="to"
                            placeholder={'Select date start to Select date end'}
                            useRange={false}
                            value={value}
                            onChange={(v) => handleValueChange(v)}
                            showFooter={true}
                            disabled={disabled}
                            inputClassName={"ring ring-1 ring-gray-300 relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"}
                        />
                    </div>
                    }
                    {
                        messageError
                          ? <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                            {messageError}
                        </span>
                          : ''
                    }
                </div>
  )
}