import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, ProgressBar, Button } from "react-bootstrap";
import AddOgWork from "../AddOgWork/AddOgWork";

const OgTracker = () => {

    const [wordCount, setWordCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [work, setWork] = useState([])

    useEffect(()=> {
        getWork();
    },[])

    const handleSubmit = async (e) => {
        e.PreventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.post('http://localhost:8000/library/og_tracker/', {headers: {Authorization: 'Bearer ' + jwt }}) 
        console.log(response.data)
        setWork(response.data)
    } // on submit posting to og_tracker database

    const removeReadWork = async (workId) => {
        const jwt = localStorage.getItem('token')
        let response = await axios.delete(`http://localhost:8000/library/og_tracker/`, workId, {headers: {Authorization: 'Bearer ' + jwt }})
        setWork(response.data)
        setWorkCount(workCount - 1)
    }

    const getWork = async () => {
        const jwt =localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/og_tracker/', {header: {Authorization: 'Bearer ' + jwt }})
        console.log(response.data)
        setWork(response.data)
        setWordCount(work.word_count)
        
    }

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
                    <Table align="center">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Word Count</th>
                                <th>Date Read</th>
                                <th>Link</th>
                                <th>Remove?</th>
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
                                            {element.work_link}
                                        </td>
                                        <td>
                                        <Button onClick={removeReadWork(element.id)} color = "danger">Delete Read Work</Button>
                                        </td>
                                    </tr>
                                        )}
                            </tbody>
                    </Table>
                    <Container style={{paddingTop: '10px'}}>
                        <AddOgWork onSubmit={handleSubmit} onClick={()=> setWorkCount(workCount+{wordCount})}/>
                    </Container>
        </React.Fragment>
    );
}

export default OgTracker;
