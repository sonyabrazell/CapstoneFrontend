import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import AddBook from "../AddBook/AddBook";
import { Container, Button } from "react-bootstrap";
import RelatedPopover from "../RelatedPopover/RelatedPopover";

const LibraryView  = ({user}) => {
    
    const [books, setBooks] = useState([])

    useEffect(()=>{
        getBooks()
    },)

    const getBooks = async () => {
        console.log(user)
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/library/', {headers: {Authorization: 'Bearer ' + jwt}})    
        setBooks(response.data)
    }

    const removeBook = (book_id => {
        const jwt = localStorage.getItem('token')
        axios.delete(`http://localhost:8000/library/delete/${book_id}`, {headers: {Authorization: 'Bearer ' + jwt}})
        getBooks()
    })



return ( 
    <Container fluid>
        <React.Fragment>
            {console.log(user.id)}
            {console.log(books)}
            {books.map((element)=>
            <div className="card mb-3" style={{width: '500px'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <svg
                        className="bd-placeholder-img"
                        width="100%"
                        height="250"
                        xmlns={element.book_cover}
                        aria-label="Book Cover"
                        preserveAspectRatio='xMidyMid slice'
                        role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#f2acb9"/>
                        </svg>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className ="card-title">Title: {element.book_title}</h5>
                                <h2>Author: {element.book_author}</h2>
                                <p>ISBN: {element.book_isbn}</p>
                            </div>
                        </div>
                </div>
                <Button variant="danger" onClick={(e) => removeBook(e, element.id)}>Remove from Library</Button>
                <RelatedPopover />
            </div>
            )};
            <AddBook />
        </React.Fragment>
    </Container>
);
}

export default LibraryView;