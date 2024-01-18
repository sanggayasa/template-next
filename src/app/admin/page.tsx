"use client"
import Sidebar from "@/components/sidebar"
import Image from "next/image"
import { useState } from "react"
export default function Login() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
                <div className="basis-full">
                    <div className="flex flex-row-reverse shadow-md h-10">
                        <div className="flex items-center p-2 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="flex items-center p-2">
                            Sanggayasa
                        </div>
                        <div className="flex items-center">
                            <Image className="rounded-full m-2" src={"/logo.png"}  width={26} height={26} alt="Picture of the author" />
                        </div>
                        <div className="flex-auto">
                                <button onClick={()=>setSidebarOpen(!sidebarOpen)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ">
                                    <span className="sr-only">Open sidebar</span>
                                    <svg className="w-4 h-4 bg-color-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                    </svg>
                                </button>
                        </div>
                    </div>
                    <div className="">
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                        asdasdasd<br />asdasdSAdasM<br/>sadasd<br/>sdasdasdasd<br/>sadas<br/>
                    </div>
                </div>
            </div>
    )
}