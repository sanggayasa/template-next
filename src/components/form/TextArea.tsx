const TextArea = ({ 
  labelName, 
  value, 
  setValue, 
  disabled, 
  messageError, 
  isLoading, 
  id 
}:{
  labelName?: any;
  value?: string;
  setValue?: any;
  disabled?: boolean;
  messageError?: string;
  isLoading?: boolean;
  id?: string;
}) => {
  return (
        <div>
            <div className="">
                <label htmlFor="message" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">{labelName || 'labelName'}</label>
                {isLoading
                  ? <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-20 bg-slate-200 rounded"></div>
                    </div>
                </div>
                  : <textarea
                id={id}
                value={value}
                onChange={setValue}
                disabled={disabled}
                className={`${messageError ? 'focus:border-red-300 focus:ring-red-300 border-red-300' : 'focus:border-blue-300 border-gray-300'} focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid bg-white bg-clip-padding px-3 py-2.5 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed`} placeholder="Write your thoughts here..."></textarea>
                }
            </div>
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

export default TextArea
