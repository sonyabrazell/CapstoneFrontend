import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
import { Form, FormLabel, Container, Button } from 'react-bootstrap';

const AddBook = () => {

    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [cover, setCover] = useState('');
    const [readStatus, setReadStatus] = useState('');
    const [format, setFormat] = useState('');
    const [genre, setGenre] = useState('');
    const [series, setSeries] = useState('');
    const [specialEdition, setSpecialEdition] = useState('');
    const [firstEdition, setFirstEdition] = useState('');
    const [signed, setSigned] = useState('');

    const newBook = {
        user: userId,
        book_title: title,
        book_author: author,
        book_isbn: isbn,
        book_cover: cover,
        read_status: readStatus,
        book_format: format,
        book_genre: genre,
        book_series: series,
        special_edition: specialEdition,
        first_edition: firstEdition,
        signed: signed,
    }    

    useEffect(()=> {
        getCurrentUser();
    },[])

    let getCurrentUser = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get()
        setUserId(response.data.id)
    }
    //add api for adding book, and then api to retrieve book cover into handle submit

    let handleSubmit = async (e) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token');
        let response = await axios.post('http://localhost:8000/library/library/', newBook, {headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data);
        if (response.request.status === 201)
        {
            alert('Book added, thank you!');
        }
    }

    return (

        // need to add a way to retrieve and set book cover from api after form submit

        <Container style={{ flex: 1, width: '50%', padding: '10%'}}>
            <FormLabel><h3>Add Book</h3></FormLabel>
            <Form id="add-book" onSubmit={(e)=> handleSubmit(e)}>
                <Form.Group controlId="formBookTitle">Title
                    <Form.Control
                        type="title"
                        placeholder="Title"
                        onChange={(e)=> setTitle(e.target.value)}
                        value={title}/>
                </Form.Group>
                &nbsp;
                <Form.Group controlId="formBookAuthor">Author
                    <Form.Control
                        type="author"
                        placeholder="Author"
                        onChange={(e)=> setAuthor(e.target.value)}
                        value={author}/>
                </Form.Group>
                &nbsp;
                <Form.Group controlId="formBookIsbn">ISBN
                    <Form.Control
                        type="isbn"
                        placeholder="ISBN"
                        onChange={(e)=> setIsbn(e.target.value)}
                        value={isbn}/>
                </Form.Group>
                &nbsp;
                {['checkbox', 'radio'].map((type)=> (
                    <div key={`default-${type}`} className='mb-3'>
                        <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default-${type}`}
                        onChange={(e)=> setReadStatus(e.target.value)}
                        value={readStatus}> 
                        Read Status
                        </Form.Check>
                    </div>
                ))}
                <Form.Group controlId="formBookFormat">Book Format
                    <Form.Select
                        onChange={(e)=> setFormat(e.target.value)}
                        value={format}>
                            <option>Choose Book Format</option>
                            <option>Hardback</option>
                            <option>Paperback</option>
                            <option>eBook</option>
                            <option>Audiobook</option>
                    </Form.Select>
                </Form.Group>
                &nbsp;
                <Form.Group controlId="formBookGenre">Book Genre
                    <Form.Select
                        onChange={(e)=> setGenre(e.target.value)}
                        value={genre}>
                            <option>Choose Genre</option>
                            <option>Action/Adventure</option>
                            <option>Biography/Autobiography</option>
                            <option>Children's</option>
                            <option>Fantasy</option>
                            <option>General Fiction</option>
                            <option>Historical Fiction</option>
                            <option>History</option>
                            <option>Horror</option>
                            <option>Literary Fiction</option>
                            <option>Mystery/Suspense</option>
                            <option>Poetry</option>
                            <option>Reference</option>
                            <option>Romance</option>
                            <option>Science Fiction</option>
                            <option>Self Help</option>
                            <option>True Crime</option>
                    </Form.Select>
                </Form.Group>
                &nbsp;
                {['checkbox', 'radio'].map((type)=> (
                    <div key={`default-${type}`} className='mb-3'>
                        <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default-${type}`}
                        onChange={(e)=> setSeries(e.target.value)}
                        value={series}>
                        Series
                        </Form.Check>
                    </div>
                ))}
                {['checkbox', 'radio'].map((type)=> (
                    <div key={`default-${type}`} className='mb-3'>
                        <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default-${type}`}
                        onChange={(e)=> setSpecialEdition(e.target.value)}
                        value={specialEdition}>
                        Special Edition
                        </Form.Check>
                    </div>
                ))}
                {['checkbox', 'radio'].map((type)=> (
                    <div key={`default-${type}`} className='mb-3'>
                        <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default-${type}`}
                        onChange={(e)=> setFirstEdition(e.target.value)}
                        value={firstEdition}>
                        First Edition
                        </Form.Check>
                    </div>
                ))}
                {['checkbox', 'radio'].map((type)=> (
                    <div key={`default-${type}`} className='mb-3'>
                        <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default-${type}`}
                        onChange={(e)=> setSigned(e.target.value)}
                        value={signed}>
                        Signed
                        </Form.Check>
                    </div>
                ))}
                &nbsp; &nbsp;
                <Button type="submit" variant="danger">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AddBook;