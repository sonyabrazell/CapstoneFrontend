import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Alert } from "react-bootstrap";

const RelatedBooks = () => {

    const [relatedBooks, setRelatedBooks] = useState([]);

    const book_genre = document.getElementById('book_genre').value

    useEffect(() => {
        getRelatedBooks(book_genre)
    },[book_genre])

    const getRelatedBooks = async (book_genre) => {
        let API_URL = `https://www.googleapis.com/books/v1/volumes`;
        let response = await axios.get(`${API_URL}?q=${book_genre}`)
            console.log(response.json)
            .then((res) => res.json())
            .then((data) => {
            data.items.forEach(book => {
            setRelatedBooks(book);
            });
        });
    }

    const handleClick = async (e, elementId) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.post('http://localhost:8000/library/books/', elementId, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        if (response.request.status === 201)
        {
            <Alert variant="secondary">
                Book added to library, thank you!
            </Alert>
        }} //adds search result book to library
    
    return ( 
        <Container fluid>
                {relatedBooks.data.items.map((element, index)=>
            <div className="card mb-3" style={{width: '500px'}} key={index}>
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
                <div>
                    <Button variant="danger" onClick={(e) => handleClick(e, element.id)}>Add to Library</Button>
                </div>
            </div>
        )};
        </Container>
    )
}

export default RelatedBooks;

