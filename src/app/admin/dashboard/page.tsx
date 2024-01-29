"use client"
import MediumChart from "@/components/chart/mediumChart";
import BasicChart from "@/components/chart/basicChart";
import PieChart from "@/components/chart/pieChart";
import RadialBallChart from "@/components/chart/radialBallChart";
const Dasboard =()=> {
    return (
        <div >
            <div className="flex flex-row">
                <BasicChart></BasicChart>
            </div>
            <div className="flex flex-row">
                <MediumChart></MediumChart>
            </div>
            <div className="flex flex-row">
                <PieChart></PieChart>
            </div>
            <div className="flex flex-row">
                <RadialBallChart></RadialBallChart>
            </div>
        </div>
    )
}

export default Dasboard