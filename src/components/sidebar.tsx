"use client"
import Image from 'next/image'
import { ReactNode } from 'react'
export default function Sidebar({sidebarOpen, setSidebarOpen}:{sidebarOpen: ReactNode, setSidebarOpen: Function}) {
    {console.log(sidebarOpen)}
    
    return (
            // <aside id="default-sidebar" className='sm:sticky fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0' aria-label="Sidebar">
            <aside id="default-sidebar" className={`sm:${sidebarOpen ? 'fixed':'sticky'} fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0':'-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="flex flex-row m-3">
                        <div>
                            <Image className="rounded-full m-2" src={"/logo.png"}  width={60} height={60} alt="Picture of the author"></Image>
                        </div>
                        <div className='flex-auto flex justify-end sm:hidden' onClick={()=>setSidebarOpen(!sidebarOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 p-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="m-3 p-3">
                        <div className="flex flex-row">
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <div className=''>Dashboard</div>
                        </div>
                    </div>
                </div>
            </aside>
    )
}