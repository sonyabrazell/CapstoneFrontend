import React, { useState } from "react";
import axios from "axios";
import { ProgressBar, Container, Button } from "react-bootstrap";
import _default from "react-bootstrap/esm/Accordion";


const BookTracker = (book_id) => {

    const [readBook, setReadBook] = useState('')
    const [count, setCount] = useState(0)
    const [trackedBook, setTrackedBook] = useState([])

    
     //where to change read_status from false to true in user's library
    
     const getReadBooks = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/library/', { headers: { Authorization: 'Bearer ' + jwt } })
        response.data.filter    
    })
        })
    }

    const removeReadBook = async (book_id) => {
        const jwt = localStorage.getItem('token')
        axios.delete(`http://localhost:8000/library/book_tracker/delete/${book_id}`, {headers: {Authorization: 'Bearer ' + jwt}})
     } //need to remove book from tracker, set read_status back to false

    return ( 
        
        <Container>
            <ProgressBar striped variant="success" now={count} />

            <Button 
            onClick={()=> setCount(count + 1)} 
            onSubmit={handleSubmit} 
            onChange={handleChange} 
            color = "danger">
                Add Read Book</Button>
            <Button 
            onClick={()=> setCount(count - 1), removeReadBook(book_id)} 
            onSubmit={handleSubmit} 
            onChange={handleChange} 
            color = "danger">
                Delete Read Book</Button>
        </Container>
    );
}

export default BookTracker;