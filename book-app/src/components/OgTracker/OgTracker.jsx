import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, ProgressBar, Button } from "react-bootstrap";
import AddOgWork from "../AddOgWork/AddOgWork";


const OgTracker = () => {

    const [wordCount, setWordCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [work, setWork] = useState([])
    const [loadData, setLoadData] = useState(false)

    useEffect(()=> {
        getWork();
    },[loadData])

    const handleSubmit = async (e) => {
        e.PreventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.post('http://localhost:8000/library/og_tracker/', {headers: {Authorization: 'Bearer ' + jwt }}) 
        console.log(response.data)
        setWork(response.data)
        setWorkCount(work.length)
    } // on submit posting to og_tracker database

    const getWork = async () => {
        const jwt =localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/og_tracker/', {headers: {Authorization: 'Bearer ' + jwt }})
        console.log("Work: ", response.data)
        setWork(response.data)
        setWorkCount(work.length)
        displayLength(response.data)
        getWordCount(work)
    }

    const displayLength = (workArray) => {
        let length = workArray.length;
        console.log("length of read work: ", length)
        return setWorkCount(length)
    }

    const getWordCount = (() => {
        const total = work.map(item => item.word_count).reduce((prev,next) => prev + next);
        return setWordCount(total)
        })

    return (
        <React.Fragment>
            <div style={{paddingTop: "10%"}} />
            <h1 align="center">Og Work Tracker</h1>
                <Container align="left" style={{paddingTop: "20px"}}>
                    <ProgressBar striped variant="danger" now={workCount} label={`${workCount}`} />
                        <h5>YOU HAVE READ {workCount} ORIGINAL WORKS</h5>
                    <ProgressBar variant="danger" now={wordCount} label={`${wordCount}`}/>
                        <h5>YOU HAVE READ {wordCount} WORDS</h5>
                </Container>
                <br></br>
                    <Table style = {{paddingTop: '10px'}} align="center" striped bordered responsive>
                        <thead style={{backgroundColor: '#f2acb9'}} align="center">
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Word Count</th>
                                <th>Date Read</th>
                                <th>Source</th>
                            </tr>
                        </thead>
                            <tbody>
                                {work.map((element, index) => 
                                    <tr key={index}>
                                        <td>
                                            {element.work_title}
                                        </td>
                                        <td>
                                            {element.work_author}
                                        </td>
                                        <td>
                                            {element.word_count}
                                        </td>
                                        <td>
                                            {element.work_date_read}
                                        </td>
                                        <td>
                                            <a href={`${element.work_link}`}>Source</a>
                                        </td>
                                    </tr>
                                        )}
                            </tbody>
                    </Table>
                    <Container style={{paddingTop: '10px'}}>
                        <AddOgWork onSubmit={handleSubmit}/>
                    </Container>
        </React.Fragment>
    );
}

export default OgTracker;
