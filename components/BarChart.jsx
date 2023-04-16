import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const BarChart = ({coi, title}) => {
  
  // console.log("coi", coi)
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [loading, setLoading] = useState(true);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    coi && setChartData({
        // labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        labels: coi? coi.map(d => d.sp): [],
        datasets: [
              {
                label: 'CE Data',
                // data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                data: coi? coi.map(d => d.ccoi): [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(0, 100, 0, 0.8)',
              }, 
              {
                label: 'PE Data',
                data: coi? coi.map(d => d.pcoi): [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(100, 0, 0, 0.8)',
              }, 
        ]
    })
    coi && setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
