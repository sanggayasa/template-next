"use client"
import Image from 'next/image'
import { ReactNode } from 'react'
import MenuSidebar from '@/components/menuSidebar'
export default function Sidebar({sidebarOpen, setSidebarOpen}:Readonly<{sidebarOpen: ReactNode, setSidebarOpen: Function}>) {
    
    return (
            <aside id="default-sidebar" className={`md:sticky fixed top-0 left-0 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0':'-translate-x-full'} md:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="flex flex-row m-2 mb-12">
                        <div>
                            <Image priority={false} className="rounded-full " src={"/logo.png"}  width={60} height={60} alt="Picture of the author"></Image>
                        </div>
                        <button className='flex-auto flex justify-end sm:hidden' onClick={()=>setSidebarOpen(!sidebarOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 p-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <MenuSidebar></MenuSidebar>
                </div>
            </aside>
    )
}