"use client"
import InputText from "@/components/form/InputText"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux"
import { addNilaiActionCreator, subtractionActionCreator  } from "../../../states/nilai/action"


export default function Cart() {
    const [subNavStatus, setSubNavStatus] = useState('beforePayment')
    const route = useRouter();
    const dispatch = useDispatch();
    const [qty, setQty] = useState(0)
    
    const handlerListOrder = (action: string) => {
        if (action == "tambah"){
            setQty(qty + 1)
            dispatch(addNilaiActionCreator());
        }else{
            setQty(qty - 1)
            dispatch(subtractionActionCreator());
        }
    }

    return (
        <div className="">
            <div className="w-2/6 text-center ">
                <div className="flex flex-cols items-center">
                    <button className="w-1/3" onClick={()=>handlerListOrder('kurang')}>
                            <p className="text-lg">-</p>
                    </button>
                    <div className="w-1/3">
                            <form>
                                <input type="text" value={qty} disabled className="border-2 border-gray-300 w-12 text-center rounded-md"></input>
                            </form>
                    </div>
                    <button className="w-1/3" onClick={()=>handlerListOrder('tambah')}>
                            <p className="text-lg">+</p>
                    </button>
                </div>
                <div onClick={()=>route.push('/cart')}>pindah page cart</div>
            </div>
        </div>
    )
}