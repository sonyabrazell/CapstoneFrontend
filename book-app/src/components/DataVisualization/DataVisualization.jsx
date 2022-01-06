// data visualization to display on dashboard
// books read by month
// works read by month
// year to date books read
// year to date words read
import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import { readBooks } from '../BookTracker/BookTracker.jsx';
import { workCount, wordCount} from '../OgTracker/OgTracker.jsx';
import axios from 'axios';



const DataVisualization = (props) => {
    let initialMonthData ={
        datasets:[{
            label: "Blank Item",
            data: [],
            borderColor: 'rgb(255,255,255)',
            backgroundColor: 'rgba(0,0,0,1.0)'
        }]
    }
    const [readyByMonthData, setReadyByMonthData]= useState(initialMonthData);

    Chart.register(registerables);

    const [byMonth, setByMonth] = useState({});
    const [booksByMonth, setBooksByMonth] = useState([]);
    const [worksByMonth, setWorksByMonth] = useState([]);
    const [wordsByMonth, setWordsByMonth] = useState([])
    const wordsByMonthOptions = "some options"

    // const readByMonth = () => {
    //     let empBook = [];
    //     let empWork = [];
    //     // console.log(bookCount)
    //     for(const dataObj of bookCount){
    //         empBook.push(parseInt())
    //     }
        
    //     setByMonth({
    //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //         datasets: [
    //             {
    //                 label: 'ReadBooks',
    //                 data: ''
    //             }
    //         ]
    //     })
    // }

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


    const readByMonthData = {
        labels: [],
        datasets: [
            {
            label: 'Read Books',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Read Works',
            data: [],
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
                // data: labels.map(()=> wordCount.datatype.number({min:0, max: 1000000000})),
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
        <h3 align="left">Hey there, reader.</h3>
        <div style={{paddingTop:'20%'}}/>
            <Container flex style={{flexWrap:'wrap', alignContent:'space-around'}}>
                <Bar options={readByMonthOptions} data={readByMonthData} />
            </Container>
            <Container>
                <Doughnut options={wordsByMonthOptions} data={wordsByMonthData} />
            </Container>
    </React.Fragment>
)}

export default DataVisualization;
