"use client"

import InputText from "@/components/form/InputText"
import { useState } from "react"

export default function Form() {
    const [value, setValue] = useState<string>('')
    return (
        <div className="border-2 border-solid border-gray-100 p-3 m-3">
            <p>{value}</p>
            <form>
                <InputText 
                    labelName={""} 
                    value={value}
                    type="password" 
                    setValue={setValue} 
                ></InputText>
                <InputText 
                    labelName={""} 
                    value={value}
                    type="email" 
                    setValue={setValue} 
                ></InputText>
                <InputText 
                    labelName={""} 
                    value={value}
                    setValue={setValue} 
                ></InputText>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}