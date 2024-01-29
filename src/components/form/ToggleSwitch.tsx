import React from 'react'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ 
  labelName, 
  isChecked, 
  handleCheckboxChange, 
  id 
}:{
  labelName: string,
  isChecked: any,
  handleCheckboxChange: any,
  id: string
  }) => {
  
  // const handleCheckboxChange = (value:any)=>{
  //   handleCheckboxChange(!isChecked)
  // }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" checked={isChecked} onChange={e => handleCheckboxChange(e.target.checked)} className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{labelName || 'labelName'}</span>
  </label>
      
  )
}

{/* <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
            <input id={id} className="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox" checked={isChecked} onChange={e => handleCheckboxChange(e.target.checked)}/>
            <label className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700" htmlFor="rememberMe">{labelName || 'labelName'}</label>
        </div> */}
ToggleSwitch.propTypes = {
  labelName: PropTypes.string,
  isChecked: PropTypes.any,
  handleCheckboxChange: PropTypes.func,
  id: PropTypes.string
}
export default ToggleSwitch
