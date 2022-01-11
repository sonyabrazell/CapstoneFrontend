import axios from 'axios'
import { element } from 'prop-types';
import React, { useState } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'

const BookSearch = () => { 

    const [searchResults, setSearchResults] = useState([]);
    const [input, setInput] = useState('');

    let API_URL = `https://www.googleapis.com/books/v1/volumes`;

    function handleChange(e){
        const input = e.target.value
        setInput(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}?q=${input}&maxResults=10`)
            .then(data => {
                console.log(data.data.items)
                setSearchResults(data.data.items)
            })
    };

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
        } //adds search result book to library
    }

    return (
        <React.Fragment>
            <div style={{paddingTop: "10%"}} align='center'/>
            <h1 align="center">Book Search</h1>
        <Container style={{paddingTop:"20px"}} align="center">
            <div className="search-bar ui segment" align="center">
                <div className="field" align="center">
                    <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
                            <input
                                id="input"
                                type="text"
                                placeholder="Search by Title or Author"
                                className="me-2"
                                aria-label="Search"
                                value={input}
                                onChange={handleChange}/>
                        <Button type="submit" variant="danger">Search</Button>                
                    </form>
                </div>
            </div>
            <div>
                {searchResults.map((element, index =>
            <div className="card mb-3" style={{width: '500px'}} key={index} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                        className="bd-placeholder-img"
                        width="100%"
                        height="250"
                        src={`http://books.google.com/books/content?id=${element.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                        alt={`${element.book_title}`}
                        aria-label="Book Cover">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#f2acb9"/>
                        </img>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className ="card-title">Title: {element.book_title}</h5>
                                <h2>Author: {element.book_author}</h2>
                            </div>
                        </div>
                </div>
                    <Button variant="danger" onClick={(e) => handleClick(e, element.id)}>Add to Library</Button>
                    </div>
                ))}
                </div>
            </Container>
        </React.Fragment>
    )
}
export default BookSearch;