import { useState } from "react";
import Image from "next/image";
function EstimateHardware(){
    const [pageCount, setPageCount] = useState(0);
    const [selectionHardware, setSelectionHardware] = useState("");
    const page=[
        <SelectionHardware 
            key="selectionHardware" 
            selectionHardware={selectionHardware} 
            setSelectionHardware={setSelectionHardware}
        />,
        <SelectionBranch key="selectionBranch" />,
        <SelectionFault key="selectionFault" />,
    ];
    
    
    const onNext = ()=>{
        if(pageCount < page.length -1 ){
            setPageCount(pageCount+1);
        }  
    }

    const onPrevious = ()=>{
        if(pageCount > 0){
            setPageCount(pageCount-1);
        }  
    }

    return(
        <div>
            { page[pageCount] }
            <div className="flex text-center mt-3" >
                <div className="basis-1/2">
                    {
                        pageCount !== 0 ? (
                        <button onClick={onPrevious} className="inline-flex items-center py-2 px-3 text-sm font-medium text-right text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            Sebelumnya
                        </button>
                    ):false
                }
                </div>
                <div className="basis-1/2">
                    <button onClick={onNext} className="inline-flex items-center py-2 px-3 text-sm font-medium text-right text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selanjutnya
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EstimateHardware;

function SelectionHardware({
    selectionHardware,
    setSelectionHardware
}:Readonly<{
    selectionHardware:string,
    setSelectionHardware:any
}>){

    return(
        <div className="flex flex-wrap text-center justify-center">
            <div onClick={()=>setSelectionHardware("pc")} className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs ">
                {
                    
                    selectionHardware ==="pc" ?
                        (
                            <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-yellow-300">
                                <Image src={'../../../public/assets/image/monitor.webp'} alt="pc" className="m-auto"/>
                            </div>
                        ):
                        (
                            <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                                <Image src={'../../../public/assets/image/monitor.webp'} alt="pc" className="m-auto"/>
                            </div>
                        )
                }
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Personal Computer</h5>
                    </a>
                </div>
            </div>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs ">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={"../../../public/assets/image/laptop.webp"} alt="laptop" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Laptop / Notebook</h5>
                    </a>
                </div>
            </div>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={'../../../public/assets/image/handphone.webp'} alt="hp" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Smartphone</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}

function SelectionBranch(){
    return(
        <div className="flex flex-wrap text-center justify-center">
            <h1>selection branch</h1>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={'../../../public/assets/image/monitor.webp'} alt="pc" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Personal Computer</h5>
                    </a>
                </div>
            </div>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs ">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={"../../../public/assets/image/laptop.webp"} alt="laptop" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Laptop / Notebook</h5>
                    </a>
                </div>
            </div>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={'../../../public/assets/image/handphone.webp'} alt="hp" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Smartphone</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}

function SelectionFault(){
    return(
        <div className="flex flex-wrap text-center justify-center">
            <h1>selection Fault</h1>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={'../../../public/assets/image/monitor.webp'} alt="pc" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Personal Computer</h5>
                    </a>
                </div>
            </div>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs ">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={"../../../public/assets/image/laptop.webp"} alt="laptop" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Laptop / Notebook</h5>
                    </a>
                </div>
            </div>
            <div className="basis-3/4 mt-1 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs">
                <div className="rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-blue-500 to-green-300">
                    <Image src={'../../../public/assets/image/handphone.webp'} alt="hp" className="m-auto"/>
                </div>
                <div className="">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Smartphone</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}