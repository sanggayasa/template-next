// import Link from 'next/link'
"use client"
import Navigate from "@/components/Navigate"
import Banner from "@/components/Banner"
import Services from "@/components/Services"
import Package from "@/components/Package"
import Estimate from "@/components/Estimate"
import About from "@/components/About"
import Footer from "@/components/Footer"

import { useState } from "react"
export default function Home() {
  const [lang, setLang] = useState("idn");
  const changeLang = (lang: string)=>{
    setLang(lang)
  }; 
  
  return (
    <div className='main max-h-screen'>
    <Navigate lang={lang} changeLang={changeLang}></Navigate>
    <div className=' overflow-y-scroll snap snap-y snap-mandatory text-slate-500 backdrop-blur-sm'>
      <Banner lang={lang}></Banner>
      <Services lang={lang}></Services>
      <Package lang={lang}></Package>
      <Estimate lang={lang}></Estimate>
      <About lang={lang}></About>
      <Footer lang={lang}></Footer>
    </div>
  </div>
  )
}
