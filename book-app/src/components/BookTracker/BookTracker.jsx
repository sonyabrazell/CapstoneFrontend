import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProgressBar, Container, Button } from "react-bootstrap";


const BookTracker = ({user}) => {

    const [readBooks, setReadBooks] = useState([]);
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState([]);
    const [updatedBook, setUpdatedBook] = useState(true);

    useEffect(()=>{
        getBooks()
        displayReadBooks()
    },[user.id])
    
    const getBooks = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://localhost:8000/library/library/', { headers: { Authorization: 'Bearer ' + jwt }})
            console.log(response.data)
            setBooks(response.data)
        }        
    
    const displayReadBooks = () => {
        let readBooks = books.filter(books.read_status === true)
        console.log(readBooks)
        setReadBooks(readBooks)
    }

    const removeReadBook = async (book) => {
        const jwt = localStorage.getItem('token');
        await axios.delete(`http://localhost:8000/library/book_tracker/delete/${books.id}`, {headers: {Authorization: 'Bearer ' + jwt}})
        updateBook(current => !current)
        setCount(count - 1)
    } 

    const updateBook = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.post(`http://localhost:8000/library/library/`, updatedBook, {headers: {Authorization: 'Bearer: ' + jwt}})
        setUpdatedBook(response.data)
    } // takes removed book and updates read status to false

    return ( 
        <React.Fragment>
            <h1>Book Tracker</h1>
            <Container>
                <ProgressBar striped variant="success" now={count} />
            </Container>
            <Container style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {readBooks.map((element, index) =>
                    <div key={index} className="card mb-3" style={{width: '500px', height: '400px', padding: '5px'}}>
                        <div className="col-md-4">
                            <img src={element.book_cover} alt="book cover" style={{paddingTop: '10px', paddingLeft: '10px'}}/>
                        </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 align="right" className="card-title">{element.book_title}</h2>
                            <h5 align="right">{element.book_author}</h5>
                            <p align="right">{element.date_read}</p>
                        </div>
                    </div>
                    <Button 
                    onClick={()=> removeReadBook({element})} 
                    color = "danger">
                        Delete Read Book</Button>
                    </div>
            )}</Container>
        </React.Fragment>
    );
}

export default BookTracker;