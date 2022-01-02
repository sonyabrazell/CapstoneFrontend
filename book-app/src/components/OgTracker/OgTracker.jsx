import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, ProgressBar, Button } from "react-bootstrap";
import AddOgWork from "../AddOgWork/AddOgWork";

const OgTracker = () => {

    const [wordCount, setWordCount] = useState(0)
    const [readWork, setReadWork] = useState([])
    const [count, setCount] = useState(0)
    const [work, setWork] = useState([])

    useEffect(()=> {
        getWork()
    },[])

    const handleSubmit = async (e) => {
        e.PreventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.post('http://localhost:8000/library/og_tracker', readWork, {headers: {Authorization: 'Bearer ' + jwt }})
        setReadWork(response.data)
    } // on submit posting to og_tracker database

    const removeReadWork = async (workId) => {
        const jwt = localStorage.getItem('token')
        await axios.delete(`http://localhost:8000/library/og_tracker/`, workId, {headers: {Authorization: 'Bearer ' + jwt }})
        setCount(count - 1)
    }

    const getWork = async () => {
        const jwt =localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/og_tracker', {header: {Authorization: 'Bearer ' + jwt }})
        setWork(response.data)
        setWordCount(response.data.word_count)
        
    }

    return (
        <React.Fragment>
            <div style={{paddingTop: "10%"}} />
            <h1 align="center">Og Work Tracker</h1>
                <Container align="left" style={{paddingTop: "20px"}}>
                    <ProgressBar striped variant="danger" now={count} label={`${count}`} />
                        <h5>YOU HAVE READ {count} ORIGINAL WORKS IN {new Date().getFullYear()}</h5>
                </Container>
                    <Table align="center">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Word Count</th>
                                <th>Date Read</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                            <tbody>
                                {work.map((element, index) => 
                                    <tr key={index}>
                                        <td>
                                        </td>
                                        <Button onClick={removeReadWork(element.id)} color = "danger">Delete Read Work</Button>
                                    </tr>
                                        )}
                            </tbody>
                    </Table>
                    <Container style={{paddingTop: '10px'}}>
                        <AddOgWork onSubmit={handleSubmit} onClick={()=> setCount(count+{wordCount})}/>
                    </Container>
        </React.Fragment>
    );
}

export default OgTracker;