import { useEffect, useState } from "react";

function EstimateSoftware(){
    const basisAplikasi = [{id:"1",name:"Mobile",value:1000000},{id:"2",name:"Web",value:200000},{id:"3",name:"Dekstop",value:10000}];
    const templateOption = [{id:"1",name:"design baru",value:1},{id:"2",name:"design yang sudah ada",value:2}];
    const penggunaList = [{id:"1",name:"Pribadi"},{id:"2",name:"Pelajar"},{id:"3",name:"Perusahaan"}]
    const categoryListPribadi = [{id:"1",name:"CV / profile / biodata"},{id:"2", name:"Blog"},{id:"3",name:"E-commerce"},{id:"4", name:"edukasi"}, {id:"5", name:"intergrasi IOT"},{id:"6", name:"undangan"}]
    const categoryListPelajar = [{id:"1",name:"CV / profile / biodata"},{id:"2", name:"Blog"},{id:"3",name:"E-commerce"},{id:"4", name:"edukasi"}, {id:"5", name:"intergrasi IOT"},{id:"6", name:"undangan"}]
    const categoryListPerusahaan = [{id:"1",name:"profile perusahaan"},{id:"2", name:"Blog"},{id:"3",name:"E-commerce"},{id:"4", name:"edukasi"}, {id:"5", name:"intergrasi IOT"},{id:"6", name:"undangan"}, {id:"7", name:"ERP"}, {id:"8", name:"Journal Keuangan"}, {id:"9", name:"HR Management"}]
    const totalPageList = [{id:"1",name:"1"},{id:"2", name:"1 sd 5"},{id:"3",name:"5 sd 10"},{id:"4", name:"10 sd 15"}, {id:"5", name:"belum mengetahui"}]
    const customeTeknologiList = [{id:"1",name:"YA"},{id:"2", name:"TIDAK"}]
    const languageListMobile = [{id:"1",name:"javascript"},{id:"2", name:"dart"},{id:"3", name:"java"}, {id:"4", name:"kotlin"}]
    const languageListWeb = [{id:"1",name:"javascript"},{id:"2", name:"dart"}, {id:"3", name:"PHP"}]
    const languageListDesktop = [{id:"1",name:"java"},{id:"2", name:"dart"}, {id:"3", name:"C"}]
    const agreementList = [{id:"1",name:"beli putus"},{id:"2", name:"dengan maintanance"}]
    const setupServerList = [{id:"1",name:"dengan setup server"},{id:"2", name:"tanpa setup server"}]
    const placeServerList = [{id:"1",name:"server sendiri"},{id:"2", name:"server pihak 3 "}]
    const agreementPeriodList = [{id:"1",name:"6 bulan"},{id:"2", name:"1 tahun"}, {id:"3", name:"2 tahun"}]
    const frameworkListJavascript = [{id:"1",name:"react"},{id:"2", name:"vue"}, {id:"3", name:"angular"}]
    const frameworkListPhp = [{id:"1",name:"CI"},{id:"2", name:"LARAVEL"},{id:"3",name:"tanpa framework"}]
    const frameworkListPython = [{id:"1",name:"DJango"},{id:"2",name:"tanpa framework"}]
    const frameworkListDart = [{id:"1",name:"flutter"},{id:"2",name:"tanpa framework"}]
    const frameworkListJava = [{id:"1",name:"spring"},{id:"2",name:"tanpa framework"}]

    const [optionUser, setOptionUser] = useState("")
    const [optionTemplate, setOptionTemplate] = useState("")
    const [optionPengguna, setOptionPengguna] = useState("")
    const [optionCategory, setOptionCategory] = useState("")
    const [optionTotalPage, setOptionTotalPage] = useState("")
    const [optionCustomeTeknologi, setOptionCustomeTeknologi] = useState("")
    const [optionLang, setOptionLanguage] = useState("")
    const [optionAgreement, setOptionAgreement] = useState("")
    const [optionSetupServer, setOptionSetupServer] = useState("")
    const [optionPlaceServer, setOptionPlaceServer] = useState("")
    const [optionAgreementPeriod, setOptionAgreementPeriod] = useState("")

    const [title, setTitle] = useState("Pilih platform aplikasi")
    const [pageCount, setPageCount] = useState("platform")
    const [listData, setListData] = useState(basisAplikasi)
    const [selectItem, setSelectItem] = useState("")
    const [selectFunctionOption, setselectFunctionOption] = useState(()=>setOptionUser)
    const [pageOption, setPageOption] = useState({
        prevPage:"",
        nextPage:"template"
    })

    const categoryByPengguna = ()=>{
        if(optionPengguna==="1"){
            setListData(categoryListPribadi)
        }else if(optionPengguna ==="2"){
            setListData(categoryListPelajar)
        }else{
            setListData(categoryListPerusahaan)
        }
    }

    const languageByPlatform = ()=>{
        if(optionUser==="1"){
            setListData(languageListMobile)
        }else if(optionUser === "2"){
            setListData(languageListWeb)
        }else{
            setListData(languageListDesktop)
        }
    }

    const frameworkByBahasa = ()=>{
        if(optionPengguna==="1"){
            setListData(categoryListPribadi)
        }else if(optionPengguna ==="2"){
            setListData(categoryListPelajar)
        }else{
            setListData(categoryListPerusahaan)
        }
    }

    const processOption = (page)=>{
        switch (page) {
            case "platform":
                setTitle("Pilih platform aplikasi")
                setListData(basisAplikasi)
                setPageCount('platform')
                setPageOption({
                    ...pageOption,
                    nextPage:"template"
                })
                setSelectItem(optionUser)
                setselectFunctionOption(()=>setOptionUser)
                break
            case "template":
                setTitle("Pilih design")
                setListData(templateOption)
                setPageCount('template')
                setPageOption({
                    ...pageOption,
                    nextPage:"pengguna",
                    prevPage:"platform"
                })
                setSelectItem(optionTemplate)
                setselectFunctionOption(()=>setOptionTemplate)
              break;
            case "pengguna":
                setTitle("Sebagai apa anda ?")
                setListData(penggunaList)
                setPageCount('pengguna')
                setPageOption({
                    ...pageOption,
                    nextPage:"category",
                    prevPage:"template"
                })
                setSelectItem(optionPengguna)
                setselectFunctionOption(()=>setOptionPengguna)
              break;
            case "category":
                setTitle("Pilih Kategori atau tujuan aplikasi")
                categoryByPengguna()
                setPageCount('category')
                setPageOption({
                    ...pageOption,
                    nextPage:"totalPage",
                    prevPage:"pengguna"
                })
                setSelectItem(optionCategory)
                setselectFunctionOption(()=>setOptionCategory)
              break;
            case "totalPage":
                setTitle("Berapa halaman ?")
                setListData(totalPageList)
                setPageCount('totalPage')
                setPageOption({
                    ...pageOption,
                    nextPage:"customTeknologi",
                    prevPage:"category"
                })
                setSelectItem(optionTotalPage)
                setselectFunctionOption(()=>setOptionTotalPage)
              break;
            case "customTeknologi":
                setTitle("Biarkan kami yang menentukan teknologi, arsitektur dan infrastruktur")
                setListData(customeTeknologiList)
                setPageCount('customTeknologi')
                console.log(optionCustomeTeknologi)
                setPageOption({
                    ...pageOption,
                    nextPage:optionCustomeTeknologi !== "1" ? "language":"agreement",
                    prevPage:"totalPage"
                })
                setSelectItem(optionCustomeTeknologi)
                setselectFunctionOption(()=>setOptionCustomeTeknologi)
              break;
            case "language":
                setTitle("pilih bahasa front yang ingin digunakan ?")
                languageByPlatform()
                setPageCount('language')
                setPageOption({
                    ...pageOption,
                    nextPage:"",
                    prevPage:"customTeknologi"
                })
                setSelectItem(optionLang)
                setselectFunctionOption(()=>setOptionLanguage)
              break;
            case "agreement":
                setTitle("pilih perjanjian berikut ...")
                setListData(agreementList)
                setPageCount('agreement')
                setPageOption({
                    ...pageOption,
                    nextPage:optionAgreement === "1" ? "setupServer":"placeServer",
                    prevPage:"customTeknologi"
                })
                setSelectItem(optionAgreement)
                setselectFunctionOption(()=>setOptionAgreement)
              break;
            case "setupServer":
                setTitle("mau di setup ?")
                setListData(setupServerList)
                setPageCount('setupServer')
                setPageOption({
                    ...pageOption,
                    nextPage:"",
                    prevPage:"agreement"
                })
                setSelectItem(optionSetupServer)
                setselectFunctionOption(()=>setOptionSetupServer)
              break;
            case "placeServer":
                setTitle("anda punya server ?")
                setListData(placeServerList)
                setPageCount('placeServer')
                setPageOption({
                    ...pageOption,
                    nextPage:"agreementPeriod",
                    prevPage:"agreement"
                })
                setSelectItem(optionPlaceServer)
                setselectFunctionOption(()=>setOptionPlaceServer)
              break;
            case "agreementPeriod":
                setTitle("berapa lama ingin bersama kami ?")
                setListData(agreementPeriodList)
                setPageCount('agreementPeriod')
                setPageOption({
                    ...pageOption,
                    nextPage:"",
                    prevPage:"placeServer"
                })
                setSelectItem(optionAgreementPeriod)
                setselectFunctionOption(()=>setOptionAgreementPeriod)
              break;
            case "framework":
                setTitle("framework apa yang ingin digunakan ?")
                setListData()
                setPageCount('framework')
                setPageOption({
                    ...pageOption,
                    nextPage:"",
                    prevPage:"placeServer"
                })
                setSelectItem(optionAgreementPeriod)
                setselectFunctionOption(()=>setOptionAgreementPeriod)
              break;
            default:
          }
        
    }
    
    useEffect(()=>{
        const detailBasisAplikasi = basisAplikasi.find((value)=> value.id === optionUser)
        const detailTamplateOption = templateOption.find((value)=> value.id === optionTemplate)
        const detailPenggunaOption = penggunaList.find((value)=> value.id === optionPengguna)

        let estimasiBasisAplikasi = 0;
        console.log(detailTamplateOption)
        if (detailTamplateOption !== undefined && detailPenggunaOption !== undefined) {
            if(detailTamplateOption.id ==="1"){
                estimasiBasisAplikasi = detailBasisAplikasi.value
            }else{
                estimasiBasisAplikasi = detailBasisAplikasi.value * 10/100
            }

            if(detailPenggunaOption.id === "2"){
                estimasiBasisAplikasi = estimasiBasisAplikasi * 80/100
            }else if (detailPenggunaOption.id === "3" ){
                estimasiBasisAplikasi = (estimasiBasisAplikasi * 20/100) + estimasiBasisAplikasi
            }

            console.log(estimasiBasisAplikasi)
          }
        // console.log(estimasiBasisAplikasi)
        // console.log(optionTemplate)
        // if(optionCustomeTeknologi !==""){
        // setPageOption({
        //     ...pageOption,
        //     nextPage:optionCustomeTeknologi !== "1" ? "language":"agreement",
        //     prevPage:"totalPage"
        // })}
    },[optionUser,optionTemplate, optionPengguna])

    useEffect(()=>{
        if(optionCustomeTeknologi !==""){
            setPageOption({
                ...pageOption,
                nextPage:optionCustomeTeknologi !== "1" ? "language":"agreement",
                prevPage:"totalPage"
            })}
        
    },[optionCustomeTeknologi])

    useEffect(()=>{
        if(optionAgreement !==""){
            setPageOption({
                ...pageOption,
                nextPage:optionAgreement === "1" ? "setupServer":"placeServer",
                prevPage:"customTeknologi"
            })}
    },[optionAgreement])

    return(
        <div>
            {/* {console.log(selectItem)} */}
            <div className="flex flex-wrap text-center justify-center">
                <p className="p-3 mt-3">{title}</p>
                {
                    listData.map((select, index)=>{
                        // {console.log(select)}
                        return(
                            <div 
                            key={index}
                            tabIndex={index} 
                            onClick={()=>{selectFunctionOption(select.id);setSelectItem(select.id)}} 
                            onKeyDown={(e) => {if (e.key === 'Enter') selectFunctionOption(select.id);setSelectItem(select.id)}}
                            className={`w-80 text-white p-5 bg-gradient-to-r md:basis-3/12 rounded-lg border-2 border-slate-300 m-3 ${selectItem === select.id? "from-pink-500 to-yellow-500":"from-green-200 to-blue-500"}`}>
                                <p>{select.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex text-center" >
            <div className="basis-1/2">
                {pageCount !== "platform"  &&
                <button onClick={()=>processOption(pageOption.prevPage)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-right text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    Sebelumnya
                </button>}
            </div>
            <div className="basis-1/2">
                {selectItem !== "" &&
                <button onClick={()=>processOption(pageOption.nextPage)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-right text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Selanjutnya
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                </button>
                }
            </div>
        </div>
        </div>
        
    )
}

export default EstimateSoftware;