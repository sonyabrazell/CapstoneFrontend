import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    );

export const options = {
    responsive: true,
    plugins: {
    legend: {
        position: 'left',
    },
    title: {
        display: true,
        text: 'Original Words read in 2021',
    },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

export const data = {
    labels,
    datasets: [
    {
        label: 'Words Read',
        data: [747393,578395,729134,819341,531361,668913,313993,331446,899638,138914,779249,346377],
        borderColor: 'rgb(255, 99, 132)',
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
        ],
    },
],
};

export function WordChart() {
    return <Doughnut 
            options={options} 
            data={data} 
            />;
}
