import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, layouts } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Flex } from "antd";

const InvoiceStatusChart = () => {
    
    ChartJS.register(ArcElement, Tooltip, Legend);

    const options = {
        responsive: true, 
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                enabled: true, 
                backgroundColor: 'rgba(0,0,0,0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
        },
        layout: {
            // padding: {
            //     top:10
            // },
        }
    }

    const data = {
        labels: ['Completed Invoice', 'Pending Invoice', 'In-progress Invoice'],
        datasets: [
          {
            data: [35, 57, 12],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)'
            ],
          },
        ],
        
      };


    return (
        <div className="h-[250px]">
            <Pie data={data} options={options}/>
        </div>
    )
}

export default InvoiceStatusChart
