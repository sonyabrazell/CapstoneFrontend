import axios from 'axios'
import React, { useState } from 'react'

const BookSearch = (props) => {

    const [book, setBook] = useState('')
    const [searchResults, setSearchResults] = useState('')

    const getSearchResults = (searchFor) => {
        let searchResults = book.filter(b => b.book_title.toLowerCase().includes(searchFor.toLowerCase()))
        .map(books => (books));
        setSearchResults(searchResults)
    }

    const getBooks = async () => {
        let response = await axios.get(`https://openlibrary.org/search.json?q=${searchFor}`)
        setBook(response.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let searchFor = document.getElementById('searchFor')
        getBooks(searchFor)
        getSearchResults(book)
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
            alert('Book added to library, thank you')
        }
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
    )
}
export default BookSearch;