import { SetStateAction, useState } from "react";

function Serivces({lang}:{lang:string}){
    const features = [
        {
            id:"videoSoftware",
            judul:["Pengembangan Perangkat Lunak", "Software Development"],
            src:"/assets/video/software.mp4",
            deskripsi:["Kami menyediakan layanan jasa untuk pembuatan aplikasi berbasis web, dekstop dan mobile disemua bidang sesuai dengan kebutuhan anda.","We provide services for the creation of web-based, desktop and mobile applications in all fields according to your needs."]
        },
        {
            id:"videoHardware",
            judul:["Perbaikan Hardware Dan Software", "Hardware and Software Repair"],
            src:"/assets/video/hardware.mp4",
            deskripsi:["Kami menyediakan jasa service hardware seperti perangkat komputer, laptop dan Handphone. dan Jasa perbaikan software seperti install ulang OS , restore data dan Optimalisasi aplikasi.", "We provide hardware service services such as computers, laptops and cellphones. and Software repair services such as OS reinstallation, data restore and application optimization."]
        },
        {
            id:"videoInfra",
            judul:["Infrastruktur Jaringan Dan Server","Network And Server Infrastructure"],
            src:"/assets/video/infrastructure.mp4",
            deskripsi:["Kami menyediakan jasa pembuatan rancangan dan instalasi pemasangan jaringan internet, telepon, dan CCTV.", "We provide design and installation services for internet, telephone, and CCTV network installation."]
        },
        {
            id:"videoIot",
            judul:["Internet Of Things dan Robotic","Internet Of Things and Robotic"],
            src:"/assets/video/iot.mp4",
            deskripsi:["Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT untuk rumahan sampai industri skala besar .", "We provide design and manufacture of IoT products for home to large-scale industries"]
        }
    ];
    const idn = ["LAYANAN", "Lebih lanjut"];
    const uk = ["SERVICES", "Read More"];

    const chLang = lang === "idn"?idn:uk;
    const chLangNo = lang === "idn"? 0:1;
    const [chModal, setModal] = useState(true);

    const [featureNo, setFeature ] = useState(0);

    function openModal(index: any){
        const modal = document.querySelector("#modalFeature");
        setFeature(index);
        if(chModal){
            modal?.classList.remove("hidden");
            modal?.classList.remove("-z-10");
            modal?.classList.add("z-30");
            setModal(false);
        }else{
            modal?.classList.add("hidden");
            modal?.classList.add("-z-10");
            setModal(true);
        }
    }
    
    
    return(
        <section className="snap-start w-full pt-10" id="layanan">
            <div className="m-auto p-5">
                <hr className="md:invisible"/>
                <p className="text-center text-xl font-bold pt-5 pb-5 " >{chLang[0]}</p>
                    <div id="modalFeature" aria-hidden="true" className="hidden -z-10 overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-0 w-full md:inset-0 h-modal md:h-full mt-10">
                        <div className="m-auto relative p-4 w-full max-w-2xl h-full md:h-auto">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {features[featureNo].judul[chLangNo]}
                                    </h3>
                                    <button  onClick={()=>openModal(0)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="p-6 space-y-6">
                                    <video className="md:h-80" key={features[featureNo].src}  autoPlay muted>
                                        <source src={features[featureNo].src} type="video/mp4" />
                                    </video>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {features[featureNo].deskripsi[chLangNo]}
                                    </p>
                                </div>
                                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                    <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{chLangNo === 0? "Paket":"Packages"}</button>
                                    <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">{chLangNo === 0? "Kalkulasi":"Estimate"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="overflow-x-auto h-128 scrollbar-hide ">
                    <div className="flex flex-wrap justify-center sm:ml-0 md:ml-5 lg:ml-20 overflow-x-auto">
                        {
                            features.map((feature,index)=>{
                                let deskripsi = feature.deskripsi[chLangNo];
                                if (deskripsi.length > 100){
                                    deskripsi = deskripsi.substring(0, 100) + " ...";
                                }
                                
                                
                                return(
                                    <div className="max-w-sm m-3 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 lg:max-w-xs " key={index}>
                                        <a href="s">
                                            <video className="md:h-80" id={feature.id} autoPlay muted>
                                                <source src={feature.src} type="video/mp4" />
                                            </video>
                                        </a>
                                        <div className="p-5">
                                            <a href="s">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{feature.judul[chLangNo]}</h5>
                                            </a>
                                            {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{deskripsi}</p> */}
                                            <button onClick={()=>openModal(index)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                {chLang[1]}
                                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                                            </button>
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

export default Serivces;