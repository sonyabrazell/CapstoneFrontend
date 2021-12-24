import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { Table, Container, ProgressBar, Button } from "react-bootstrap";

const OgTracker = ({user}) => {

    const [readWork, setReadWork] = useState([])
    const [count, setCount] = useState(0)
    const [work, setWork] = useState([])

    useEffect(()=> {
        getWork()
    }, [user.id])

    const handleChange = (e) => {
        setReadWork(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.PreventDefault();
        const jwt = localStorage.getItem('token')
        await axios.post('http://localhost:8000/library/og_tracker', readWork, {headers: {Authorization: 'Bearer ' + jwt }})
    } // on submit posting to og_tracker database

    const removeReadWork = async () => {
        const jwt = localStorage.getItem('token')
        await axios.delete(`http://localhost:8000/library/book_tracker/delete/`, {headers: {Authorization: 'Bearer ' + jwt }})
        setCount(count - 1)
    }

    const getWork = async () => {
        const jwt =localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/og_tracker', {header: {Authorization: 'Bearer ' + jwt }})
        setWork(response.data)
    }

    return (
        <div>
            <h1 align="center" style={{paddingTop: '100px'}}>Og Work Tracker</h1>
                <Container align="left" style={{paddingTop: "20px"}}>
                    <ProgressBar striped variant="danger" now={count} label={`${count}`} />
                        <h5>YOU HAVE READ {count} ORIGINAL WORKS IN {new Date().getFullYear()}</h5>
                </Container>
                <React.Fragment>
                    <Table>
                        <thead>
                            <tr>
                                <th>Link</th>
                            </tr>
                        </thead>
                            <tbody>
                                {work.map((element, index) => 
                                    <tr key={index}>
                                        <td>
                                        </td>
                                    </tr>
                                        )}
                            </tbody>
                    </Table>
                    <Button type="submit" onSubmit={handleSubmit} onClick={()=> setCount(count + 1)} color = "danger">Add Read Work</Button>
                    <Button onClick={removeReadWork()} color = "danger">Delete Read Work</Button>
        </React.Fragment>
        </div> 
    );
}

export default OgTracker;