"use client"
import InputNumber from "@/components/form/InputNumber";
import InputText from "@/components/form/InputText";
import MultipleSelect from "@/components/form/MultipleSelect";
import SelectDate from "@/components/form/SelectDate";
import { useState } from "react";
export default function AddProduct (){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDateValue] = useState<{ startDate: string; endDate: string }>({
        startDate: "",
        endDate: ""
    });
    const [selected, setSelected] = useState([]);

    const handleNameInputChange = (dataName: string) => {
        setName(dataName);
    };

    const handleNumberInputChange = (dataNumber: string) => {
        setNumber(dataNumber);
    }

    const handlerDate = ({ startDate, endDate }: { startDate: string; endDate: string }) =>{
        setDateValue({ startDate, endDate });
    }

    const handlerSelected = (value:any) =>{
        setSelected(value)
    }
    return (
        <div >
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    <InputText className={" "} labelName={"Name"} disabled={false} messageError={""} value={name} setValue={handleNameInputChange} type={undefined} isLoading={undefined} id={undefined}></InputText>
                </div>
                <div className="flex flex-col basis-full p-2">
                    <InputNumber className={"no hp"} labelName="Number" disabled={false} messageError={""} value={number} setValue={handleNumberInputChange} isLoading={false} id={'tes'} prefix={""} suffix={""} thousandSeparator={true}></InputNumber>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    <SelectDate id={'dtp_Period'} disabled={false} labelName={<div>Period <span className="text-red-500">*</span></div>} setValue={handlerDate} messageError={''} isLoading={false} value={date}/>
                </div>
                <div className="flex flex-col basis-full p-2">
                    <MultipleSelect 
                    labelName={"Multiple Select"} 
                    options={[{
                        "value": "9997",
                        "label": "Passion"
                    },
                    {
                        "value": "9999",
                        "label": "PDS",
                        "selected": true
                    }]} 
                    
                    selected={selected} 
                    setSelected={handlerSelected} 
                    disabled={false} 
                    messageError={""} 
                    isLoading={false} 
                    id={""} 
                    ></MultipleSelect>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    
                </div>
                <div className="flex flex-col basis-full p-2">
                    
                </div>
            </div>
        </div>
    )
}