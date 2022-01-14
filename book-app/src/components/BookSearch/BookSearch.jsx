import axios from 'axios'
import { element } from 'prop-types';
import React, { useState } from 'react'
import { Container, Button, Alert} from 'react-bootstrap'

const BookSearch = () => { 

    const [searchResults, setSearchResults] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = document.getElementById("input").value
        getBooks(input)
        };

    const getBooks = async (input) => {
        console.log(input)
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=10`)
            setSearchResults(response.data.items);
            console.log(searchResults)
            }
        catch (error) {
            console.log(error.response.data)
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
        } //adds search result book to library
    }

    return (
        <React.Fragment>
            <div align='center' style={{paddingTop: "10%"}}/>
            <h1 align="center">Book Search</h1>
        <Container style={{width: '600px', display: 'flex', justifyContent: 'center', paddingTop:"20px"}} >
            <div className="search-bar ui segment" >
                <div className="field" >
                    <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
                            <input
                                id="input"
                                type="search"
                                width='500px'
                                placeholder="Search by Title or Author"
                                className="me-2"
                                aria-label="Search"
                                value={input}
                                onChange={(e)=> setInput(e.target.value)}
                                />
                        <Button type="submit" variant="danger">Search</Button>                
                    </form>
                </div>
            </div>
        </Container>
        <Container>
            <div style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
                {searchResults.map((element, index) =>
            <div key={index} className="card mb-3" style={{ padding: '10px', width: '500px', height: 'auto', borderRadius:'25px', boxShadow: '10px 10px #f2acb9'}} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                        className="bd-placeholder-img"
                        style={{width: '150px', height:'auto', borderRadius:'25px'}}
                        src={`http://books.google.com/books/content?id=${element.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                        alt={`${element.volumeInfo.title}`}
                        aria-label="Book Cover">
                        </img>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body" align='right'>
                                <h4 className ="card-title">Title: {element.volumeInfo.title}</h4>
                                <h5>Author: {element.volumeInfo.authors}</h5>
                                {/* <p>ISBN: {element.volumeInfo.industryIdentifiers.identifier}</p> */}
                            </div>
                        </div>
                </div>
                <div align='right' style={{padding: '15px'}}>
                    <Button size='sm' variant="danger" onClick={(e) => handleClick(e, element.items.id)}>Add to Library</Button>
                    </div>
                </div>
                )}
                </div>
            </Container>
        </React.Fragment>
    )
};
export default BookSearch;