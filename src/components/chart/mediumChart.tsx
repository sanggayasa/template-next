'use client' // if you use app dir, don't forget this line

import React from 'react';
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MediumChart: React.FC = () => {
  // TYPE 1
  // const series = [{
  //   name: "STOCK ABC",
  //   data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  // }];


  // TYPE 2
  const series = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  },
  {
    name: 'series3',
    data: [16, 31, 60, 38, 39, 62, 21]
  }
  ]
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left'
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left'
    },
    // labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999'],
    xaxis: {
      type: 'category',
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  };

  return (
    <>
      <Chart type="area" options={options} series={series} height={200} width={500} />
    </>
  );
}

export default MediumChart;