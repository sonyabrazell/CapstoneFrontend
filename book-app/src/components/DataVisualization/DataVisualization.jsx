// data visualization to display on dashboard
// books read by month
// works read by month
// year to date books read
// year to date words read
import React from 'react';
import { readBooks, count } from BookTracker;
import { readWork, wordCount } from OgTracker;
import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement,
        LineElement,Title,Tooltip,Legend,ArcElement,} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';


const DataVisualization = () => {

    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const readByMonthOptions = {
        responsive: true,
        plugins: {
        legend: {
        position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }}
        },},
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const readByMonthData = {
        labels,
        datasets: [
            {
            label: 'Read Books',
            data: labels.map(() => readBooks.datatype.number({ min: 0, max: 500 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Read Works',
            data: labels.map(() => readWork.datatype.number({ min: 0, max: 500 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
        ],
    };

    const wordsByMonthData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'],
        datasets: [
            {
                label: 'Words Read by Month',
                data: labels.map(()=> wordCount.datatype.number({min:0, max: 1000000000})),
                backgroundColor: [
                    '#f23a29',
                    '#f2acb9',
                    '#8c2108',
                    '#400101',
                    '#f46153',
                    '#f7cdd5',
                    '#a34d39',
                    '#794d4d',
                    '#f7887e',
                    '#fbe6ea',
                    '#c59083',
                    '#b29999',
                ]
            }
        ]
    }


return (
    <React.Fragment>
        <div style={{paddingTop:'20%'}}/>
            <Container flex style={{flexWrap:'wrap', alignContent:'space-around'}}>
            <Bar options={readByMonthOptions} data={readByMonthData} />
            </Container>
    </React.Fragment>
)}

export default DataVisualization;
