import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Button, Badge } from "react-bootstrap";
import './LibraryView.css'
import Series from "../SeriesOffCanvas/SeriesOffCanvas.jsx";
import Related from "../RelatedOffcanvas/RelatedOffcanvas.jsx";


const LibraryView = () => {

    const [books, setBooks] = useState([]);
    const [updatedBook, setUpdatedBook] = useState(true);

    useEffect(() => {
        getBooks()
    },[updatedBook])
    
    const getBooks = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/library/', { headers: { Authorization: 'Bearer ' + jwt } })
        console.log(response.data)
        setBooks(response.data)
    };

    const updateBook = async (bookId) => {
        const jwt = localStorage.getItem('token')
        let response = await axios.post(`http://localhost:8000/library/library/`, bookId, {read: true}, {headers: {Authorization: 'Bearer: ' + jwt}})
        setUpdatedBook(response.data)
    };

    return (
        <React.Fragment>
            <div>
                <div style={{paddingTop:"10%"}}/>
                <Container style={{paddingTop: '20px', paddingBottom: '20px', backgroundColor: "#d9ccc1"}}>
                    <h1 align="center">Library</h1>
                </Container>
            <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}} >
                {books.map((element, index) =>
                    <div key={index} className="card mb-3" align="right" style={{ width: '500px', height: 'auto', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={`${element.book_cover}`} alt={`${element.book_title}`} style={{width: '200px', borderRadius:'25px'}}/>
                            </div> 
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h2 align ="right" className="card-title">{element.book_title}</h2>
                                    <h5 align="right">{element.book_author}</h5>
                                    <p align="right">ISBN: {element.book_isbn}</p>
                                    <div align="right" style={{width: '200px', flexWrap: "wrap", justifyContent: "space-evenly"}}>
                                            <Badge pill bg="dark" className="me-2">{element.book_genre}</Badge> 
                                            <Badge pill bg="dark" className="me-2">{element.book_format}</Badge>
                                            {element.special_edition === true ? (
                                            <Badge pill bg="dark" className="me-2">Special Edition</Badge>
                                        ) : ''}
                                            {element.first_edition === true ? (
                                            <Badge pill bg="dark" className="me-2">First Edition</Badge> 
                                        ) : ''}
                                            {element.signed === true ? (
                                            <Badge pill bg="dark" className="me-2">Signed</Badge>
                                        ) : ''}
                                            {element.book_series === true ? (
                                            <Badge pill bg="dark" className="me-2">{element.series_name}</Badge>
                                        ): ''}
                                            {element.read_status === true ? (
                                            <Badge pill bg="dark" className="me-2">Read</Badge>
                                        ): ''} 
                                    {/* <p align="right">{element.first_sentence}</p> */}
                                        </div>
                                        <div align='right' style={{padding: '2px'}}>
                                            <br/>
                                            <Related book_author = {element.book_author}/>
                                        <div align='right' style={{padding: '2px'}}/>
                                            {element.book_series === true ? (
                                            <Series series_name={element.series_name}/>
                                            ): ''}
                                        <div align='right' style={{padding: '2px'}}/>
                                            {element.read_status === false ? (
                                            <Button variant="danger" size= "sm" onClick={(e) => updateBook(e, element.value)} className="me-2">Mark as Read</Button>
                                            ): ''}
                                        </div> 
                                    </div>
                                </div>
                            </div>
                    </div> 
                )}
                </Container>                            
            </div>
        </React.Fragment>
    );
}

export default LibraryView;