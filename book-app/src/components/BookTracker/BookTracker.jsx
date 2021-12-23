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
        console.log('books inside displayRead: ', books)
        let readBooks = books.filter((el) => {
            console.log('el inside filter', el)
                return el.read_status === true
        }
            )
        console.log(readBooks)
        setReadBooks(readBooks)
        let length = readBooks.length;
        return setCount(length)
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
            <h1 align="center" style={{paddingTop:'20px'}}>Book Tracker</h1>
                <Container align="left" style={{paddingTop: "20px"}}>
                    
                    <ProgressBar striped variant="danger" now={count} label={`${count}`} />
                    <h5>BOOKS READ IN {new Date().getFullYear()}</h5>
                </Container>
            <Container style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', paddingTop: '20px'}}>
                {readBooks.map((element, index) => 
                    <div key={index} className="card mb-3" style={{width: '500px', height: '300px', padding: '5px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={element.book_cover} alt={'book-app/src/static/background.png'} style={{paddingTop: '10px', paddingLeft: '10px'}}/>
                            </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{justifyContent: 'flex-end', alignItems: "end"}}>
                                <h2 align="right" className="card-title">{element.book_title}</h2>
                                <h5 align="right">{element.book_author}</h5>
                                <p align="right">{element.date_read}</p>
                                
                                <Container>
                                <Button 
                                    align="right"
                                    onClick={()=> removeReadBook({element})} 
                                    variant= "danger">
                                    Delete Read Book</Button>
                                </Container>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    
                )}</Container>
        </React.Fragment>
    );
}

export default BookTracker;