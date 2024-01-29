import { SetStateAction, useState } from "react";
import EstimateHardware from "../app/(guest)/estimate/EstimateHardware";
import EstimateSoftware from "../app/(guest)/estimate/EstimateSoftware";
import EstimateInfra from "../app/(guest)/estimate/EstimateInfra";
import EstimateIot from "../app/(guest)/estimate/EstimateIot";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../public/assets/css/Swiper.css";
function Estimate({lang}:{lang:string}){
    const aktif ="w-82 text-center border rounded bg-blue-300 hover:bg-blue-300 text-white py-2 px-4";
    const nonaktif = "w-82 text-center border rounded hover:border-gray-200 text-gray-500 hover:bg-gray-200 py-2 px-4";

    const [search,setSearch] = useState("software");
    const idn = ["ESTIMASI","Pengembangan Perangkat Lunak","Perbaikan Perangakat Keras dan Lunak","Infrastruktur Jaringan dan Server","Internet Of Things dan Robotika"];
    const uk = ["ESTIMATE","Software Development", "Hardware and Software Repair", "Network And Server Infrastructure", "Internet Of Things and Robotic" ];

    const [estimate,setEstimate] = useState(<EstimateSoftware></EstimateSoftware>);

    const chLang = lang ==="idn"?idn:uk;
    const processSearch = (type: string)=>{
        if(type === "software"){
            setEstimate(<EstimateSoftware></EstimateSoftware>);
        }else if(type === "hardware"){
            setEstimate(<EstimateHardware></EstimateHardware>);
        }else if(type === "infra"){
            setEstimate(<EstimateInfra></EstimateInfra>);
        }else if(type === "iot"){
            setEstimate(<EstimateIot></EstimateIot>);
        }else{
            setEstimate(<EstimateIot></EstimateIot>)
        } 
        setSearch(type)   
    }

    return(
        <section className="snap-start w-full pt-10" id="simulasi">
            <div className="m-auto p-5 md:w-10/12">
                <h2 className="text-center pt-3 pb-1 text-xl font-bold" >{chLang[0]}</h2>
                <Swiper
                    cssMode={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
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
                <hr/>
                <div id="package" className="overflow-x-auto h-128 scrollbar-hide">
                    {estimate}
                </div>
            </div>
        </section>
    )
}

export default Estimate;
