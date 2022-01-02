import axios from 'axios'
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

const BookSearch = ({user}) => { 

    const [book, setBook] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [input, setInput] = useState('');

    let API_URL = `https://www.googleapis.com/books/v1/volumes`;

    const handleSubmit = (e) => {
        e.preventDefault();
        const getBooks = async () => {
            const result = await axios.get(`${API_URL}?q=${input}`);
            setBook(result.data);
        };
        getBooks(input);
        setSearchResults(searchResults);
        };
    
    const searchTermHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value)
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
                    <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
                            <input
                                id="input"
                                type="text"
                                placeholder="Search by Title or Author"
                                className="me-2"
                                aria-label="Search"
                                value={input}
                                onChange={searchTermHandler}/>
                        <button type="submit" variant="danger">Search</button>
                    </form>
                </div>
            </div>
                {searchResults.items.map((element, index)=>
            <div className="card mb-3" style={{width: '500px'}} key={index} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                        className="bd-placeholder-img"
                        width="100%"
                        height="250"
                        src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                        alt={`${element.volumeInfo.title}`}
                        aria-label="Book Cover"
                        preserveAspectRatio='xMidyMid slice'>
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#f2acb9"/>
                        </img>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className ="card-title">Title: {element.book_title}</h5>
                                <h2>Author: {element.volumeInfo.authors}</h2>
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