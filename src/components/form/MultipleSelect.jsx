import { MultiSelect } from 'react-multi-select-component'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const MultipleSelect = ({ labelName, options, selected, setSelected, disabled, messageError, isLoading, id }) => {
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
                  className={messageError ? ' rounded-md border border-red-300 ' : 'border-none outline-none'}
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

MultipleSelect.propTypes = {
  labelName: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.array,
  setSelected: PropTypes.func,
  disabled: PropTypes.bool,
  messageError: PropTypes.string,
  isLoading: PropTypes.bool,
  id: PropTypes.string
}

export default MultipleSelect
