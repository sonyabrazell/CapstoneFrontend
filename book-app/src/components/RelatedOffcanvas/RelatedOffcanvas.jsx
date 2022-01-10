import React, { useState } from "react";
import axios from "axios";
import { Offcanvas, Button } from "react-bootstrap";
import RelatedBooks from "../RelatedBooks/RelatedBooks";

function OffCanvasRelated({ name, ...props }) {
    const [show, setShow] = useState(false);
    const [relatedBooks, setRelatedBooks] = useState([]);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const handleClick = () => {
        handleShow();
        getRelatedBooks();
    }

    let book_author = props.book_author;
    console.log(book_author)

    const getRelatedBooks = async (book_author) => {
        let API_URL = `https://www.googleapis.com/books/v1/volumes`;
        let response = await axios.get(`${API_URL}?q=${book_author}&maxResults=5`)
        setRelatedBooks(response.data.items);
        console.log(relatedBooks)
    }

    return (
        <>
            <Button size='sm' variant="danger" onClick={handleClick} className="me-2">
                Get Related Books
            </Button>
            <Offcanvas style={{backgroundColor:'#400101' , height: '400px'}} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title><h3>Related Books</h3></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <RelatedBooks relatedBooks={relatedBooks}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
    }

    function Related(props) {

        let book_author = props.book_author;

    return (
        <>
            {['bottom'].map((placement, idx) => (
            <OffCanvasRelated book_author={book_author} key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
}

export default Related;