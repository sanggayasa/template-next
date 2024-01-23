import { MultiSelect } from 'react-multi-select-component'
import React, { useEffect } from 'react'

const MultipleSelect = ({ 
  labelName, 
  options, 
  selected, 
  setSelected, 
  disabled, 
  messageError, 
  isLoading, 
  id 
}:{
  labelName: string,
  options: any[],
  selected: any[],
  setSelected: Function,
  disabled: boolean,
  messageError: string,
  isLoading: boolean,
  id: string
}) => {
  useEffect(() => {
    if (disabled) {
      const elements = document.querySelectorAll('.dropdown-heading')
      elements.forEach(element => {
        element.classList.add('bg-gray-50')
      })
    } else {
      const elements = document.querySelectorAll('.dropdown-heading')
      elements.forEach(element => {
        element.classList.add('bg-white')
      })
    }
  }, [isLoading, disabled])

  useEffect(()=>{
    // const multipleSelect = document.getElementsByClassName('multiple-select')
    // multipleSelect[0].classList.add('border-none')
    // multipleSelect[0].children[0].classList.add('border-none')
    // console.log(multipleSelect[0].children[0])
    // multipleSelect[0].children[0]
  },[])

  return (
        
        <div>
            <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">{labelName || 'labelName'}</label>
            {
              isLoading
                ? <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                      <div className="h-10 bg-slate-200 rounded"></div>
                  </div>
              </div>
                : <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                  disabled={disabled}
                  className={messageError ? ' rounded-md border border-red-300 multiple-select' : 'multiple-select ring-1 rounded-md border-solid border leading-none divide-x-0'}
              />
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

export default MultipleSelect
