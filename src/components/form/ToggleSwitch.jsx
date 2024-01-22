import React from 'react'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ labelName, isChecked, handleCheckboxChange, id }) => {
  return (
        <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
            <input id={id} className="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox" checked={isChecked} onChange={e => handleCheckboxChange(e.target.checked)}/>
            <label className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700" htmlFor="rememberMe">{labelName || 'labelName'}</label>
        </div>
  )
}

ToggleSwitch.propTypes = {
  labelName: PropTypes.string,
  isChecked: PropTypes.any,
  handleCheckboxChange: PropTypes.func,
  id: PropTypes.string
}
export default ToggleSwitch
