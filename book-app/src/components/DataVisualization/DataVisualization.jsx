// data visualization to display on dashboard
// books read by month
// works read by month
// year to date books read
// year to date words read
import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
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

    Chart.register(registerables);

    const wordsByMonthOptions = "some options"
    const [books, setBooks] = useState([]);
    const [bookCount, setBookCount] = useState(0);
    const [loadData, setLoadData] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [work, setWork] = useState([])

    useEffect(()=> {
        getWork();
        getBooks();
        BookChart();
    },[loadData])
    
    const getBooks = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/book_tracker/', { headers: { Authorization: 'Bearer ' + jwt } })
        setBooks(response.data);
        displayBookLength(response.data);
        console.log('Data/ getBooks: ', books);
        console.log('Data/ bookCount: ', bookCount)
    }

    const displayBookLength = (booksArray) => {
        let length = booksArray.length;
        console.log("Length of readbooks: ", length);
        return setBookCount(length);
    }

    const getWork = async () => {
        const jwt =localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/og_tracker/', {headers: {Authorization: 'Bearer ' + jwt }})
        console.log("Work: ", response.data);
        setWork(response.data);
        setWorkCount(work.length);
        displayWorkLength(response.data);
        getWordCount(work);
        console.log('Data/ getwork: ', work);
        console.log('Data/ workCount: ', workCount);
        console.log('Data/ wordCount: ', wordCount);
    }

    const displayWorkLength = (workArray) => {
        let length = workArray.length;
        console.log("length of read work: ", length)
        return setWorkCount(length)
    }

    const getWordCount = (() => {
        const total = work.map(item => item.word_count).reduce((prev,next) => prev + next);
        return setWordCount(total)
        })

    const BookChart = ({books}, {work}) => {
        let bookLabels = [];
        let booksRead = [];
        let workLabels = [];
        let workRead = [];

        books &&
            books.map((booksRead)=> {
                const date = format(new Date(books.date_read, MM/dd/yy));
                bookLabels.push(date)
                booksRead.push(books.length)
            })
        work &&
            work.map((workRead)=> {
                const date = format(new Date(work.date_read, MM/dd/yy));
                workLabels.push(date)
                workRead.push(work.length)
            })

        const readByMonth = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Books Read by Month',
                    data: data.data.map((books) => books.date_read),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Works Read by Month',
                    data: data.data.map((work)=> work.date_read),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
            ]
        }
    }


    const wordsByMonth = {
        
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'],
        datasets: [
            {
                label: 'Words Read by Month',
                data: data.data.map((work)=> work.word_count,({min:0, max: 1000000000})),
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
                <Bar 
                    data={readByMonth}
                    option={{
                        plugins: {
                            title: {
                                dispaly: true,
                                text: 'Read by Month'
                            },
                            legend: {
                                display: true,
                                position: 'bottom'
                            }
                        }
                    }}
                    />
            </Container>
            <Container>
                <Doughnut data={wordsByMonth} />
            </Container>
    </React.Fragment>
)}

export default DataVisualization;
