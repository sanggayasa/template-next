import Image from "next/image";
function About({
    lang
}:{
    lang?:string
}
){
    return (
        <section className="snap-start w-full pt-10">
            <div className="m-auto md:w-2/3">
                    <hr/>
                    <p className="text-center pt-3 mt-3 text-xl font-bold">Tentang Kami</p>
                    <p className="text-center m-3">Kami adalah 3 Mahasiswa Universitas Bina Sarana Informatika Fakultas Teknik Informatika, yang mempunyai mimpi ingin menciptakan lapangan kerja untuk seluruh pemuda Indonesia.</p>
                    <div className="m-3">  
                        <div className="flex flex-wrap">
                            <div className="w-full md:basis-2/6 m-auto rounded-3xl ">
                                <Image  width="100" height="100" src={"/assets/image/sangga.webp"} className="m-auto rounded-full border-solid border-2" alt="sangga" />		
                                <div className="text-center px-3 pb-6 pt-2">
                                    <h3 className="text-sm bold font-sans">Sanggayasa</h3>
                                    <p className="mt-2 font-sans font-light mr-10 ml-10">Front-end Developer</p>
                                </div>
                            </div>
                            <div className="basis-1/2 md:basis-2/6 m-auto rounded-3xl ">
                                <Image  width="100" height="100" src={"/assets/image/rizat.webp"}className="m-auto rounded-full border-solid border-2" alt="rijat"/>		
                                <div className="text-center px-3 pb-6 pt-2">
                                    <h3 className="text-sm bold font-sans">Rizat Sakmir</h3>
                                    <p className="mt-2 font-sans font-light">Back-end Developer</p>
                                </div>
                            </div>
                            <div className="basis-1/2 md:basis-2/6 m-auto rounded-3xl ">
                                <Image  width="100" height="100" src={"/assets/image/agung.webp"} className="m-auto rounded-full border-solid border-2" alt="agung"/>		
                                <div className="text-center px-3 pb-6 pt-2">
                                    <h3 className="text-sm bold font-sans">Agung Maulana</h3>
                                    <p className="mt-2 font-sans font-light">UI / UX Designer</p>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
        </section>
    )
}

export default About;