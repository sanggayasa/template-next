function Login({onClose, onRegis}){


    return(
        <div className="invisible fixed w-full justify-center" id="login-show">
            <div className="m-10 mt-20 w-80 p-5 rounded-md shadow-lg bg-white border ">
                <div className="w-full text-end">
                    <i className="fa fa-close text-lg text-end" onClick={()=>onClose()}/>
                </div>
                <p className="text-center font-bold text-xl">LOGIN</p>
                <div>
                    <label htmlFor="first-name" className="mt-1 block text-base font-medium ">Username</label>
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full p-2 border-b-2 focus:outline-0 text-base" />
                </div>
                <div>
                    <label htmlFor="first-name" className="mt-1 block text-base font-medium ">Password</label>
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full p-2 border-b-2 focus:outline-0 text-base" />
                </div>
                <div className="mt-5 flex">
                    <div className="basis-1/2 text-center">
                        <p onClick={()=>onRegis()}>Daftar </p>
                        <p>Lupa Password</p>
                    </div>
                    <div className="basis-1/2 text-end" >
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Login;