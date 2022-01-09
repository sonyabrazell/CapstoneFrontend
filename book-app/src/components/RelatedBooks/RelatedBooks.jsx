import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Alert } from "react-bootstrap";

const RelatedBooks = (props) => {

    const [relatedBooks, setRelatedBooks] = useState([]);
    const [loadData, setloadData] = useState(false)

    let book_author = props.book_author
    console.log(book_author)

    useEffect(() => {
        getRelatedBooks()
    },[loadData])

    const getRelatedBooks = async (book_author) => {
        let API_URL = `https://www.googleapis.com/books/v1/volumes`;
        let response = await axios.get(`${API_URL}?q=${book_author}&maxResults=5`)
            console.log(response.data)
            setRelatedBooks(response.data.items);
            };
    

    const handleClick = async (e, elementId) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.post('http://localhost:8000/library/books/', elementId, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setloadData(!loadData)
        if (response.request.status === 201)
        {
            <Alert variant="secondary">
                Book added to library, thank you!
            </Alert>
        }} //adds search result book to library
    
    return ( 
        <React.Fragment>
        <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {relatedBooks.map((element, index)=>
            <div className="card mb-3" style={{width:'300px', height:'auto'}} key={index}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={`${element.book_cover}`} alt={`${element.book_title}`} style={{width: '150px', paddingTop:'10px', paddingLeft:'10px'}}/>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className ="card-title">Title: {element.book_title}</h5>
                                <p>Author: {element.book_author}</p>
                                <p>ISBN: {element.book_isbn}</p>
                            </div>
                        </div>
                </div>
                <div align='right' style={{padding: '5px'}}>
                    {/* <Button size='sm' variant="danger" onClick={(e) => handleClick(e, element.id)}>Add to Library</Button> */}
                </div>
            </div>
        )}
        </Container>
        </React.Fragment>
    )
}

export default RelatedBooks;

