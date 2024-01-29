// import banner from "/assets/video/banner.mp4";

function Banner({lang}:{lang:string}) {
    const idn = ["SELAMAT DATANG DI", "ITINDO SOLUTIONS merupakan penyedia layanan jasa yang bergerak dibidang Teknologi Informasi, menyediakan jasa dalam dunia teknologi informasi seperti pengembangan perangkat lunak, perbaikan hardware, instalasi jaringan, pengembangan Internet of things dan lain-lain"]
    const uk = ["WELCOME TO", "ITINDO SOLUTIONS is a service provider engaged in Information Technology, providing services in the world of information technology such as software development, hardware repair, network installation, Internet of things development and others."]
    
    const changeLang = lang === "idn"? idn : uk;

    return (
        <div className="flex flex-wrap-reverse justify-center mt-20 lg:ml-52 lg:mr-52">
                <div className="w-full m-auto md:basis-1/2 text-center justify-center">
                    <p className="text-center pt-3 text-2xl font-bold ">{changeLang[0]}</p>
                    <p className="font-bold">ITINDO SOLUTIONS</p>
                    <p className="m-auto mt-4 mb-4 p-3 md:w-3/4 md:font-medium ">{changeLang[1]}</p>
                </div>
                <div className="w-full md:basis-1/2">
                    <video autoPlay muted>
                        <source src={"../../assets/video/banner.mp4"} type="video/mp4" />
                    </video>
                </div>
        </div> 
    )
}

export default Banner;