import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProgressBar, Container, Button } from "react-bootstrap";

const BookTracker = () => {

    const [books, setBooks] = useState([]);
    const [bookCount, setBookCount] = useState(0);
    const [updatedBook, setUpdatedBook] = useState(true);
    const [loadData, setLoadData] = useState(false)

    useEffect(() => {
        getBooks();
    }, [loadData])
    
    const getBooks = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/book_tracker/', { headers: { Authorization: 'Bearer ' + jwt } })
        setBooks(response.data);
        displayLength(response.data);
    }

    const displayLength = (booksArray) => {
        let length = booksArray.length;
        console.log("Length of readbooks: ", length);
        return setBookCount(length);
    }
    
    const updateBook = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.post(`http://localhost:8000/library/library/`, updatedBook, {headers: {Authorization: 'Bearer: ' + jwt}})
        setUpdatedBook(response.data)
        // request reload of data
        setLoadData(!loadData)
    } // takes removed book and updates read status to false
    
    return (
        <React.Fragment>
            {console.log("Books rtv: ",books)}
            <h1 align="center" style={{paddingTop:'100px'}}>Book Tracker</h1>
                <Container align="left" style={{paddingTop: "20px"}}>
                    <ProgressBar striped variant="danger" now={bookCount} label={`${bookCount}`} />
                    <h5>YOU HAVE READ {bookCount} BOOKS</h5>
                </Container>
            <Container style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', paddingTop: '20px'}}>
                {books.map((element, index) => 
                    <div key={index} className="card mb-3" style={{width: '500px', height: '250px', padding: '5px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={element.book_cover} alt={'book-app/src/static/background.png'} style={{width: "150px", paddingTop: '10px', paddingLeft: '10px'}}/>
                            </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{justifyContent: 'flex-end', alignItems: "end"}}>
                                <h2 align="right" className="card-title">{element.book_title}</h2>
                                <h4 align="right">{element.book_author}</h4>
                                <p align="right">Date Read: {element.date_read}</p>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    
                )}</Container>
                
        </React.Fragment>
    );
}


export default BookTracker;