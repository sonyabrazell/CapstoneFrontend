import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
    title: {
        display: true,
        text: 'Books Read in 2021'
    },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'];

export const data = {
    labels,
    datasets: [
        {
        label: 'Books Read',
        data: [5,7,2,5,8,4,2,4,1,3,6,7],
        backgroundColor: 'rgba(64, 1, 1, 1)',
        },
        {
        label: 'Works Read',
        data: [2,1,7,3,8,1,6,6,3,3,6,9],
        backgroundColor: 'rgba(140, 33, 8, 1)',
        },
    ],
};

export function Charts() {
    return <Bar options={options} data={data} />;
}
