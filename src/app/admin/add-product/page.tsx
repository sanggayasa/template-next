"use client"
import InputNumber from "@/components/form/InputNumber";
import InputText from "@/components/form/InputText";
import MultipleSelect from "@/components/form/MultipleSelect";
import SelectDate from "@/components/form/SelectDate";
import HorizontalListGroup from "@/components/form/HorizontalListGroup";
import TextArea from "@/components/form/TextArea";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import Selection from "@/components/form/Selection";

import { useState } from "react";
import InputImage from "@/components/form/InputImage";
export default function AddProduct (){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDateValue] = useState<{ startDate: string; endDate: string }>({
        startDate: "",
        endDate: ""
    });
    const [multiSelect, setMultiSelect] = useState([]);
    const [horizontalList, setHorizontalListGroup] = useState('1')
    const [isChecked, setChecked ] = useState(false)
    const JournalList = [
            {
              id: 1,
              name: 'Wade Cooper',
              avatar:
                'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              id: 2,
              name: 'Arlene Mccoy',
              avatar:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              id: 3,
              name: 'Devon Webb',
              avatar:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
            },
    ]
    const [selected, setSelected] = useState(JournalList[3])

    const handleNameInputChange = (dataName: string) => {
        setName(dataName);
    };

    const handleNumberInputChange = (dataNumber: string) => {
        setNumber(dataNumber);
    }

    const handlerDate = ({ startDate, endDate }: { startDate: string; endDate: string }) =>{
        setDateValue({ startDate, endDate });
    }

    const handlerMultiSelect = (value:any) =>{
        setMultiSelect(value)
    }

    const handlerHorizontalListGroup = (value: any) =>{
        console.log(value)
        setHorizontalListGroup(value)
    }
    
    const handlerIsChecked = (e:boolean) =>{
        console.log(e)
        setChecked(e)
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
                    
                    selected={multiSelect} 
                    setSelected={handlerMultiSelect} 
                    disabled={false} 
                    messageError={""} 
                    isLoading={false} 
                    id={""} 
                    ></MultipleSelect>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    <HorizontalListGroup labelName={'Horizontal List'} value={[
                        {
                            id: "1",
                            name: 'Nominal'
                        },
                        {
                            id: "2",
                            name: 'Rupiah'
                        }
                    ]} 
                    setValue={handlerHorizontalListGroup} 
                    setDefaultChecked={horizontalList} 
                    className={""} 
                    isLoading={false} 
                    />
                </div>
                <div className="flex flex-col basis-full p-2">
                    <TextArea labelName={"Description"}></TextArea>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    <ToggleSwitch labelName={""} id={""} isChecked={isChecked} handleCheckboxChange={handlerIsChecked}></ToggleSwitch>
                </div>
                <div className="flex flex-col basis-full p-2">
                    <InputImage></InputImage>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col basis-full p-2">
                    <Selection disabled={false} selected={selected} setSelected={setSelected} labelName={"Selection"} valueList={JournalList} isLoading={false} id={""}></Selection>
                </div>
                <div className="flex flex-col basis-full p-2">
                    
                </div>
            </div>
        </div>
    )
}