import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";


const RelatedBooks = () => {

    const getBooks = async (book_genre) => {
        let response = await axios.get(`https://openlibrary.org/search.json?q=${book_genre}`)
        setBook(response.data); {

        const {book_title: {book_author, book_isbn, book_cover}} = data
    }} //to deconstruct json data from response

    const handleSubmit = (e) => {
        e.preventDefault();
        let searchFor = document.getElementById('searchFor')
        getBooks(searchFor)
        getSearchResults(data)
    }

    const handleClick = async (e, elementId) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        let payload = {
            userId: user.id,
            book_isbn = elementId
        }
        let response = await axios.post('http://localhost:8000/library/books/', payload, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        if (response.request.status === 201)
        {
            alert('Book added to your library!')
        } //adds search result book to library
    }

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
                {searchResults.map((element)=>
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
    );
}

export default RelatedBooks;