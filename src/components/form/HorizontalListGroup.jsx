import React from 'react'
import PropTypes from 'prop-types'

const HorizontalListGroup = ({ className, labelName, value, setValue, isLoading, setDefaultChecked, disabled }) => {
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
                    value.map((value) => {
                      return (
                            <li key={value.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input
                                        id={labelName}
                                        type="radio"
                                        value={value.id}
                                        name={labelName}
                                        onChange={setValue}
                                        checked={value.id === (setDefaultChecked ? parseInt(setDefaultChecked) : 1)}
                                        className="w-4 h-4 bg-gray-100 border-gray-300   dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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

HorizontalListGroup.default = {
  data: [
    {
      id: 1,
      name: 'labelName'
    },
    {
      id: 2,
      name: 'labelName'
    },
    {
      id: 3,
      name: 'labelName'
    }
  ]
}

HorizontalListGroup.propTypes = {
  className: PropTypes.string,
  labelName: PropTypes.string,
  value: PropTypes.array,
  setValue: PropTypes.func,
  isLoading: PropTypes.bool,
  setDefaultChecked: PropTypes.string,
  disabled: PropTypes.bool
}

export default HorizontalListGroup
