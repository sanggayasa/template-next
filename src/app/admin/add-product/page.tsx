"use client"
import InputNumber from "@/components/form/InputNumber";
import InputText from "@/components/form/InputText";
import SelectDate from "@/components/form/SelectDate";
export default function AddProduct (){
    return (
        <div >
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    <InputText className={" "} labelName={"Name"} disabled={false} messageError={""} value={undefined} setValue={undefined} type={undefined} isLoading={undefined} id={undefined}></InputText>
                </div>
                <div className="flex flex-col basis-full p-2">
                    <InputNumber className={"no hp"} labelName="Number" disabled={false} messageError={""} value={123} setValue={()=>{}} isLoading={false} id={'tes'} prefix={""} suffix={""} thousandSeparator={false}></InputNumber>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    <SelectDate id={'dtp_Period'} disabled={false} labelName={<div>Period <span className="text-red-500">*</span></div>} setValue={() => {}} messageError={''} isLoading={false}/>
                </div>
                <div className="flex flex-col basis-full p-2">
                   
                </div>
            </div>
        </div>
    )
}