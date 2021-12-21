import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import AddBook from "../AddBook/AddBook";
import { Container, Button, Badge, Row } from "react-bootstrap";
import RelatedPopover from "../RelatedPopover/RelatedPopover";
import './LibraryView.css'

const LibraryView = ({ user }) => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        getBooks()
    },[])
    
    const getBooks = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/library/', { headers: { Authorization: 'Bearer ' + jwt } })
        setBooks(response.data)
    }


    const removeBook = (book_id => {
        const jwt = localStorage.getItem('token')
        axios.delete(`http://localhost:8000/library/delete/${book_id}`, { headers: { Authorization: 'Bearer ' + jwt } })
        getBooks()
    })

    return (
        <React.Fragment>
            <div align="center" >
                <Container style={{paddingTop: '20px', paddingBottom: '20px', backgroundColor: "#d9ccc1"}}>
                    <h1>Library</h1>
                </Container>
            <Container style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {books.map((element, index) =>
                    <div key={index} className="card mb-3" style={{ width: '500px', padding: '5px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <svg
                                    className="bd-placeholder-img"
                                    style={{padding: '5px'}}
                                    width="100%"
                                    height="275"
                                    img-src={element.book_cover}
                                    aria-label="Book Cover"
                                    preserveAspectRatio='xMidyMid slice'
                                    role="img">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#8c2018" />
                                </svg>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 align ="right" className="card-title">Title: {element.book_title}</h2>
                                    <h5 align="right">Author: {element.book_author}</h5>
                                    <p align="right">ISBN: {element.book_isbn}</p>
                                    <p align="right"> <Badge pill bg="dark">{element.book_genre}</Badge> &nbsp;
                                        <Badge pill bg="dark">{element.book_format}</Badge></p>
                                        <p align="right">
                                        {element.special_edition === true ? (
                                        <Badge pill bg="dark">Special Edition</Badge>
                                    ) : ''} &nbsp;
                                        {element.first_edition === true ? (
                                        <Badge pill bg="dark">First Edition</Badge> 
                                    ) : ''} &nbsp;
                                        {element.signed === true ? (
                                        <Badge pill bg="dark">Signed</Badge>
                                    ) : ''}
                                        </p>
                                </div>
                            </div>
                        </div>
                        <Container style={{justifyContent: "flex-start"}}>
                            <RelatedPopover /> &nbsp; <Button variant="danger" onClick={(e) => removeBook(e, element.id)}>Remove from Library</Button>
                        </Container>
                    </div> 
                )};
                <Container>
                    <AddBook />
                </Container>
                </Container>                            
            </div>
        </React.Fragment>
    );
}

export default LibraryView;