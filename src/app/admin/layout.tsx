"use client"
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'
import { useState } from 'react'
import Topbar from '@/components/topbar'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
          <div className="basis-full">
              <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Topbar>
              <div className="m-2">
                  {children} 
              </div>
          </div>
        </div>
  )
}
