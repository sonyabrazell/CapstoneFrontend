import React, { useState } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";



const RelatedBooks = (books) => {

    const [relatedBooks, setRelatedBooks] = useState([]);

    const getBooks = async (book_genre) => {
        let response = await axios.get(`${API_URL}?q=${book_genre}`)
            setRelatedBooks(response.data.items)

    function handleSubmit(e) {
        e.preventDefault();
        setInput();

        function setInput() {
            let book_genre = document.getElementById(books.book_genre);
            getBooks(book_genre);
        }
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
            <div className="search-bar ui segment" >
                <div className="field">
                    <form className="d-flex" className="product-style" onSubmit={(e) => handleSubmit(e)}>
                            <input
                                id="searchFor"
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        <button type="submit" variant="danger">Search</button>
                    </form>
                </div>
            </div>
                {relatedBooks.map((element)=>
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
                    <Button variant="danger" onClick={(e) => handleClick(e, element.id)}>Add to Library</Button>
            </div>
        )}
        </Container>
    )
}

export default RelatedBooks;