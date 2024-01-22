import React from 'react'
import PropTypes from 'prop-types'

const InputFile = ({ labelName, description, selectedFile, handlerFile, id }) => {
  return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">{labelName}</label>
            <input className="block w-full text-sm text-grey-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" onChange={handlerFile} accept=".jpg,.jpeg,.png"/>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id={id} >{description}</p>
        </div>
  )
}

InputFile.propTypes = {
  labelName: PropTypes.string,
  description: PropTypes.string,
  selectedFile: PropTypes.any,
  handlerFile: PropTypes.func,
  id: PropTypes.string
}

export default InputFile
