'use client' // if you use app dir, don't forget this line

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const BasicChart = ()=>{
    //Type 1
    // const option = {
    //     chart: {
    //       id: 'apexchart-example'
    //     },
    //     xaxis: {
    //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    //     }
    //   }

    // const series = [{
    //     name: 'series-1',
    //     data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    //   }]

    //Type 2
    const option:ApexOptions = {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          // endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      // tooltip: {
      //   y: {
      //     formatter: function (val:string) {
      //       return "$ " + val + " thousands"
      //     }
      //   }
      // }
    }

    const series = [{
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
              name: 'Revenue',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
              name: 'Free Cash Flow',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }]
    return(
        <>
            <Chart type="bar" options={option} series={series} height={200} width={500} />
        </>
    )
    
}

export default BasicChart;