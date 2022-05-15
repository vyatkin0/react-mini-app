import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: false,
  pointRadius: 1,
  pointHoverRadius: 1,
  events: [],
  scales: {
    yAxes: {
        title: {
            display: true,
            text: 'yAxisTitle',
            font: {
                size: 15
            }
        },
        ticks: {
            precision: 0
        }
    },
    xAxes: {
        title: {
            display: true,
            text: 'xAxisTitle',
            font: {
                size: 15
            }
        }
    }
  },
  plugins: {
      tooltip: {
        enabled: false
      },
    legend: {
      display: false,
    },
    title: {
      align: 'start',
      display: true,
      color: '#527484',
      text: 'SPEED TEST HISTORY',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      data: [1,2,3,5,6,7],
      borderColor: '#527484',
      backgroundColor: '#527484',
    },
  ],
};

export const data2 = {
  datasets: [
    {
      data: [70, 30],
      borderRadius: [{ outerStart: 10, outerEnd: 0, innerStart: 10, innerEnd: 0 }, { outerStart: 0, outerEnd: 10, innerStart: 0, innerEnd: 10 }],
      backgroundColor: [
        '#527484',
        '#EBEBEB',
      ],
      borderColor: [
        '#4B4B4B',
        '#EBEBEB',
      ],
      borderWidth: [2,0],
    },
  ],
};

export const options2 = {
  responsive: true,
  aspectRatio: false,
  events: [],
  cutout: '90%',
  rotation: -165,
  circumference: 330,
  tooltips: false,
  backgroundColor: '#EBEBEB',
  plugins: {
    tooltip: {
      enabled: false,
    },
  legend: {
    position: 'top',
  },
  title: {
    align: 'start',
    color: '#527484',
    display: true,
    text: 'SPEED TEST',
  },
},
};

export function App() {
  return <div style={{height:350, display:'flex', columnGap: 30}}>
    <div className='ea_panel eap_elevated' style={{width: 350, position:'relative'}}>
      <Doughnut options={options2} data={data2} />
      <div style={{top: '50%', left:'50%', position:'absolute', transform:'translateX(-50%) translateY(-50%)', backgroundColor:'transparent', textAlign:'center'}}>
        <h1>20</h1>
        <div style={{fontSize:'xx-small'}}>Megabits per second</div>
        </div>
    </div>
    <div className='ea_panel eap_elevated' style={{width: 1000}}><Line options={options} data={data} /></div>
  </div>
  ;
}
