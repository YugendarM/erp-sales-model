import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PayablesReceivableBarChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: false,
            text: '',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Payables',
            data: [13000, 15000, 14000, 19000, 16000, 19000, 25600],
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
          },
          {
            label: 'Receivables',
            data: [10000, 14000, 11000, 17000, 15000, 20000, 24000],
            backgroundColor: 'rgba(53, 162, 235, 0.8)',
          },
        ],
      };
  return <Bar options={options} data={data} />;
}


export default PayablesReceivableBarChart