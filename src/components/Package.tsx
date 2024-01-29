import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../public/assets/css/Swiper.css";

function Package({lang}:{lang:string}){
    const paket = [
        {
            id:"1",
            type:"software",
            judul:"Website portofolio wordpress",
            src:"",
            deskripsi:"Kami menyediakan layanan jasa untuk pembuatan aplikasi berbasis web, dekstop dan mobile.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"2",
            type:"software",
            judul:"Perbaikan Hardware Dan Software",
            src:"",
            deskripsi:"Kami menyediakan jasa service hardware seperti perangkat komputer, laptop dan Handphone. dan Jasa perbaikan software seperti install ulang OS , restore data dan Optimalisasi aplikasi.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"3",
            type:"software",
            judul:"Infrastruktur Jaringan Dan Server",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan instalasi pemasangan jaringan internet, telepon, dan CCTV.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"4",
            type:"software",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"5",
            type:"software",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"6",
            type:"software",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        // hardware
        {
            id:"7",
            type:"hardware",
            judul:"hardware",
            src:"",
            deskripsi:"Kami menyediakan layanan jasa untuk pembuatan aplikasi berbasis web, dekstop dan mobile.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"8",
            type:"hardware",
            judul:"Perbaikan Hardware Dan Software",
            src:"",
            deskripsi:"Kami menyediakan jasa service hardware seperti perangkat komputer, laptop dan Handphone. dan Jasa perbaikan software seperti install ulang OS , restore data dan Optimalisasi aplikasi.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"9",
            type:"hardware",
            judul:"Infrastruktur Jaringan Dan Server",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan instalasi pemasangan jaringan internet, telepon, dan CCTV.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"10",
            type:"hardware",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"11",
            type:"hardware",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"12",
            type:"hardware",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        // infra
        {
            id:"13",
            type:"infra",
            judul:"infra",
            src:"",
            deskripsi:"Kami menyediakan layanan jasa untuk pembuatan aplikasi berbasis web, dekstop dan mobile.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"14",
            type:"infra",
            judul:"Perbaikan Hardware Dan Software",
            src:"",
            deskripsi:"Kami menyediakan jasa service hardware seperti perangkat komputer, laptop dan Handphone. dan Jasa perbaikan software seperti install ulang OS , restore data dan Optimalisasi aplikasi.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"15",
            type:"infra",
            judul:"Infrastruktur Jaringan Dan Server",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan instalasi pemasangan jaringan internet, telepon, dan CCTV.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"16",
            type:"infra",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"17",
            type:"infra",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"18",
            type:"infra",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        // IOT
        {
            id:"19",
            type:"iot",
            judul:"iot",
            src:"",
            deskripsi:"Kami menyediakan layanan jasa untuk pembuatan aplikasi berbasis web, dekstop dan mobile.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"20",
            type:"iot",
            judul:"Perbaikan Hardware Dan Software",
            src:"",
            deskripsi:"Kami menyediakan jasa service hardware seperti perangkat komputer, laptop dan Handphone. dan Jasa perbaikan software seperti install ulang OS , restore data dan Optimalisasi aplikasi.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"21",
            type:"iot",
            judul:"Infrastruktur Jaringan Dan Server",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan instalasi pemasangan jaringan internet, telepon, dan CCTV.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"22",
            type:"iot",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"23",
            type:"iot",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
        {
            id:"24",
            type:"iot",
            judul:"Internet Of Think",
            src:"",
            deskripsi:"Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT.",
            list:["website menggunakan wordpres", "domain gratis terbatas", "hosting gratis selama 1 tahun"]
        },
    ]
    const aktif ="w-82 text-center border rounded bg-blue-300 hover:bg-blue-300 text-white py-2 px-2";
    const nonaktif = "w-82 text-center border rounded hover:border-gray-200 text-gray-500 hover:bg-gray-200 py-2 px-2";

    const [search,setSearch] = useState("software");
    const idn = ["PAKET","Pengembangan Perangkat Lunak","Perbaikan Perangakat Keras dan Lunak","Infrastruktur Jaringan dan Server","Internet Of Things dan Robotika"];
    const uk = ["PACKAGES","Software Development", "Hardware and Software Repair", "Network And Server Infrastructure", "Internet Of Things and Robotic" ];

    const chLang = lang ==="idn"?idn:uk;
    const processSearch = (type:any)=>{
         setSearch(type)   
    }

    return(
        <section className="snap-start w-full pt-10" id="paket">
            <div className="m-auto p-5 md:w-10/12">
                <h2 className="text-center pt-3 pb-1 text-xl font-bold">{chLang[0]}</h2>
                <Swiper
                    cssMode={true}
                    // pagination={true}
                    pagination={{
                        clickable: true,
                      }}
                    mousewheel={true}
                    keyboard={true}
                    // slidesPerView={3}
                    // spaceBetween={30}
                    modules={[Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide className="mr-2 snap-center">
                        <p id="software" className={search==="software"?aktif:nonaktif} onClick={()=>processSearch("software")}>{chLang[1]}</p>
                    </SwiperSlide>
                    <SwiperSlide className="mr-2 snap-center">
                        <p id="hardware" className={search==="hardware"?aktif:nonaktif} onClick={()=>processSearch("hardware")}>{chLang[2]}</p>
                    </SwiperSlide>
                    <SwiperSlide className="mr-2 snap-center">
                        <p id="infra" className={search==="infra"?aktif:nonaktif} onClick={()=>processSearch("infra")}>{chLang[3]}</p>
                    </SwiperSlide>
                    <SwiperSlide className="mr-2 snap-center">
                        <p id="iot" className={search==="iot"?aktif:nonaktif} onClick={()=>processSearch("iot")}>{chLang[4]}</p>
                    </SwiperSlide>
                </Swiper>
                <div id="package" className="overflow-x-auto h-128 scrollbar-hide ">
                    <div className="flex flex-wrap md:ml-20 ">
                        {
                            paket.filter((x)=>{
                                return x.type === search
                            }).map((paket)=>{
                                return(
                                    <div className="max-w-sm m-3 bg-white rounded-lg border border-gray-200 shadow-md md:m-3 md:max-w-xs" key={paket.id}>
                                        <a href="ss">
                                            <img src={paket.src} alt=""/>
                                        </a>
                                        <div className="p-5">
                                            <a href="s">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{paket.judul}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{paket.deskripsi}</p>
                                        { 
                                            paket.list.map((list,index)=>{
                                                    return(
                                                        <p className="font-normal text-gray-500 dark:text-gray-400" key={index}>- {list}</p>
                                                    )
                                                })
                                            }
                                            <a href="s" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Pesan
                                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                    
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package;
