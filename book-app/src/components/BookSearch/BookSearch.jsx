import axios from 'axios'
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

const BookSearch = ({user}) => { 

    const [book, setBook] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const getBooks = async () => {
            let response = await axios.get(`https://openlibrary.org/search.json?q=${input}&fields=*,availability&limit=6`)
            let book = response.data;
            console.log(book)
            setBook(book)
        };
        getBooks(input);
        setSearchResults(searchResults);
        };
    
    const getSearchResults = () => {
        transformResponse: [function(data) {
            const json = JSON.parse(data)
            const book_title = Object.keys(json['nested object'])
            const book_cover = Object.keys(json['nested object'])
            const book_author = Object.keys(json['nested object'])
            const book_isbn = Object.keys(json['nested object'])

            data = {
                title: book_title,
                cover: book_cover,
                author_name: book_author,
                isbn: book_isbn
            }
        }]
    }
    
    const handleClick = async (e, elementId) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        let payload = {
            userId: user.id,
            book_isbn: elementId
        }
        let response = await axios.post('http://localhost:8000/library/books/', payload, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        if (response.request.status === 201)
        {
            alert('Book added to library, thank you')
        } //adds search result book to library
    }

    return (
        <React.Fragment>
            <div style={{paddingTop: "10%"}}/>
            <h1 align="center">Book Search</h1>
        <Container style={{paddingTop:"20px"}} align="center" fluid>
            <div className="search-bar ui segment" >
                <div className="field">
                    <form className="d-flex" className="product-style" onSubmit={(e) => handleSubmit(e)}>
                            <input
                                id="input"
                                type="text"
                                placeholder="Search by Title or Author"
                                className="me-2"
                                aria-label="Search"
                                value={input}
                                onChange={(e)=>setInput(e.target.value)}
                            />
                        <button type="submit" variant="danger">Search</button>
                    </form>
                </div>
            </div>
                {searchResults(book).map((element, index)=>
            <div className="card mb-3" style={{width: '500px'}} key={index} >
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
        </React.Fragment>
    )
}
export default BookSearch;