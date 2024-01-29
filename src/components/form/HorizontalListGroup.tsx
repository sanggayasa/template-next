import React from 'react'
const HorizontalListGroup = ({ 
  className, 
  labelName, 
  value, 
  setValue, 
  isLoading, 
  setDefaultChecked, 
  disabled }:{
    className:string,
  labelName: string, 
  value: any, 
  setValue: any, 
  isLoading: boolean, 
  setDefaultChecked: string, 
  disabled?: boolean
  }) => {
  const handlerHorizontalList = (e:{target:{value:string}})=>{
    setValue(e.target.value)
  }

  return (
        <div>
            <label htmlFor="username" className={ className || 'inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80 '} > {labelName || 'labelName'}</label>
            { isLoading
              ? <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-6 py-1">
                          <div className="h-10 bg-slate-200 rounded"></div>
                      </div>
                  </div>
              : <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {
                    value.map((value:{id:string,name:string}) => {
                      return (
                            <li key={value.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input
                                        id={labelName}
                                        type="radio"
                                        value={value.id}
                                        name={labelName}
                                        onChange={handlerHorizontalList}
                                        checked={value.id === (setDefaultChecked || "1") }
                                        className="w-4 h-4 bg-gray-100 border-gray-300   dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 focus:ring-blue-50 dark:bg-gray-600 dark:border-gray-500"
                                        disabled={disabled}
                                    />
                                    <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value.name}</label>
                                </div>
                            </li>
                      )
                    }
                    )
                }
            </ul>
          }
        </div>
  )
}

export default HorizontalListGroup
