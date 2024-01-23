import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Selection = ({ disabled, selected, setSelected, labelName, value, isLoading, id }) => {
  const listBoxOption = (value) => {
    function classNames (...classes) {
      return classes.filter(Boolean).join(' ')
    }

    return value.map((person) => (
    <Listbox.Option
    id={id}
      key={person.id}
      className={({ active }) =>
        classNames(
          active ? 'text-black bg-indigo-600' : 'text-gray-900',
          'relative cursor-default select-none py-2 pl-3 pr-9'
        )
      }
      value={person.id}
    >
      {({ selected, active }) => (
        <>
          <div className="flex items-center">
            <span
              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
            >
              {person.labelName}
            </span>
          </div>

          {selected
            ? (
            <span
              className={classNames(
                active ? 'text-black' : 'text-indigo-600',
                'absolute inset-y-0 right-0 flex items-center pr-4'
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
              )
            : null}
        </>
      )}
    </Listbox.Option>
    ))
  }

  return (
        <Listbox disabled={disabled} value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Listbox.Label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80 " >{labelName || 'labelName'}</Listbox.Label>
              { isLoading
                ? <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                      <div className="h-10 bg-slate-200 rounded"></div>
                  </div>
              </div>
                : <div className="relative">
                <Listbox.Button className="disabled:cursor-not-allowed relative w-full cursor-default rounded-md border border-gray-300 disabled:bg-slate-100 py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{selected.labelName}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                  {listBoxOption(value)}
                  </Listbox.Options>
                </Transition>
              </div>
              }
            </>
          )}
        </Listbox>
  )
}

Selection.propTypes = {
  value: PropTypes.array,
  labelName: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.object,
  setSelected: PropTypes.func,
  avatar: PropTypes.string,
  isLoading: PropTypes.bool,
  id: PropTypes.string
}
export default Selection
