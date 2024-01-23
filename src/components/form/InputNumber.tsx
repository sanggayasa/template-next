"use client"
import { NumericFormat } from 'react-number-format'

const InputNumber = ({ 
  className, 
  labelName, 
  value, 
  disabled, 
  prefix, 
  suffix, 
  messageError, 
  setValue, 
  isLoading, 
  id, 
  thousandSeparator 
}:{
  className: string, 
  labelName: string, 
  value: string, 
  disabled: boolean, 
  prefix: string, 
  suffix: string, 
  messageError: any, 
  setValue: Function, 
  isLoading: boolean, 
  id: string, 
  thousandSeparator: boolean
}) => {
  return (
      <div className="mb-4">
        <label className={className || 'inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80'}>{labelName || 'labelName'}</label>
        {isLoading
          ? <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                      <div className="h-10 bg-slate-200 rounded"></div>
                  </div>
              </div>
          : <NumericFormat
          value={value}
          thousandSeparator={thousandSeparator}
          disabled={disabled}
          prefix={prefix}
          suffix={suffix}
          allowNegative={false}
          decimalSeparator="."
          id={id}
          className={`${messageError ? 'focus:border-red-300 focus:ring-red-300 border-red-300' : 'focus:border-blue-300 border-gray-300'} focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid bg-white bg-clip-padding px-3 py-2.5 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
          onValueChange={values => setValue(values.value)}
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

export default InputNumber
