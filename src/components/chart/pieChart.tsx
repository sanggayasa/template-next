'use client'

import React from 'react';
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MediumChart: React.FC = () => {

  // TYPE pie and donut
  const series = [44, 55, 13, 43, 22]
  const options: ApexOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <>
      <Chart type="donut" options={options} series={series} height={200} width={500} />
    </>
  );
}

export default MediumChart;