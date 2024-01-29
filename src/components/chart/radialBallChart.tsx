'use client'

import React from 'react';
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const radialBallChart: React.FC = () => {

  // TYPE pie and donut
  const series = [44, 55, 13, 43, 22]
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };

  return (
    <>
      <Chart type="radialBar" options={options} series={series} height={500} width={500} />
    </>
  );
}

export default radialBallChart;