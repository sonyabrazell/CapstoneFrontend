import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
import { Form, FormLabel, Container, Button, Row, Col } from 'react-bootstrap';
import { Checkbox } from 'react-input-checkbox';


const AddBook = () => {

    //allows user to add book by entering info, then taking
    //user input and doing an api call to retrieve the book cover
    // and add all to library

    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [cover, setCover] = useState('');
    const [readStatus, setReadStatus] = useState(false);
    const [dateRead, setDateRead] = useState('')
    const [format, setFormat] = useState('');
    const [genre, setGenre] = useState('');
    const [series, setSeries] = useState(false);
    const [seriesName, setSeriesName] = useState('');
    const [specialEdition, setSpecialEdition] = useState(false);
    const [firstEdition, setFirstEdition] = useState(false);
    const [signed, setSigned] = useState(false);

    const newBook = {
        user_id: userId,
        book_title: title,
        book_author: author,
        book_isbn: isbn,
        book_cover: cover,
        read_status: readStatus,
        date_read: dateRead,
        book_format: format,
        book_genre: genre,
        book_series: series,
        series_name: seriesName,
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

    const getCover = async (isbn) => {
        let response = await axios.get(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`)
        setCover(response.data)
    }

    

    //add api for adding book, and then api to retrieve book cover into handle submit

    let handleSubmit = async (e) => {
        e.preventDefault();
        getCover(isbn)
        console.log(newBook)
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
        <React.Fragment>
            <Container style={{padding: '20px', backgroundColor: '#f2acb9'}}>
                <FormLabel><h2>Add Book</h2></FormLabel>
                <Form onSubmit={(e)=> handleSubmit(e)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="title" 
                                placeholder="Title"
                                onChange={(e)=> setTitle(e.target.value)}
                                value={title}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control 
                                type="Author" 
                                placeholder="Author"
                                onChange={(e)=> setAuthor(e.target.value)}
                                value={author} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridIsbn">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control 
                                type="ISBN"
                                placeholder="ISBN"
                                onChange={(e)=> setIsbn(e.target.value)}
                                value={isbn}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formBookFormat">
                            <Form.Label>Book Format</Form.Label>
                            <Form.Select 
                                defaultValue="Choose..."
                                onChange={(e)=> setFormat(e.target.value)}
                                value={format}>
                                <option>Choose...</option>
                                <option>Hardback</option>
                                <option>Paperback</option>
                                <option>eBook</option>
                                <option>Audiobook</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBookGenre">
                            <Form.Label>Book Genre</Form.Label>
                            <Form.Select 
                                defaultValue="Choose..."
                                onChange={(e)=> setGenre(e.target.value)}
                                value={genre}>
                                <option>Choose...</option>
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
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formCheckboxes" style={{padding: '5px'}}>
                            <Checkbox value={series} onChange={(e)=> setSeries(e.target.checked)}> Series?</Checkbox> &nbsp; &nbsp; &nbsp;
                            <Checkbox value={specialEdition} onChange={(e) => setSpecialEdition(e.target.checked)}> Special Edition?</Checkbox> &nbsp;
                            <Checkbox value={firstEdition} onChange={(e)=> setFirstEdition(e.target.checked)}> First Edidtion?</Checkbox> &nbsp; &nbsp; &nbsp;
                            <Checkbox value={signed} onChange={(e)=> setSigned(e.target.checked)}> Signed?</Checkbox> &nbsp; &nbsp; &nbsp;
                            <Checkbox value={readStatus} onChange={(e)=> setReadStatus(e.target.checked)}> Read?</Checkbox> 
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formSeriesName">
                            <Form.Label>Series Name</Form.Label>
                            <Form.Control
                                type="Series Name"
                                placeholder="Series name, if applicable"
                                onChange={(e)=> setSeriesName(e.target.value)}
                                value={seriesName} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formDateRead">
                            <Form.Label>Date Read</Form.Label>
                            <Form.Control
                                type="Date Read"
                                placeholder="Date read, if applicable"
                                onChange={(e)=> setDateRead(e.target.value)}
                                value={dateRead} />
                        </Form.Group>
                    </Row>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </React.Fragment>
    );
}

export default AddBook;


// // <React.Fragment>
// //         <Container style={{ flex: 'wrap', width: '50%', padding: '10%'}}>
// //             <FormLabel><h3>Add Book</h3></FormLabel>
            
// //                 <Form id="add-book" onSubmit={(e)=> handleSubmit(e)}>
// //                     <Form.Group controlId="formBookTitle"><h5>Title</h5>
// //                         <Form.Control
// //                             type="title"
// //                             placeholder="Title"
// //                             onChange={(e)=> setTitle(e.target.value)}
// //                             value={title}/>
// //                     </Form.Group>
// //                     &nbsp;
// //                     <Form.Group controlId="formBookAuthor"><h5>Author</h5>
// //                         <Form.Control
// //                             type="author"
// //                             placeholder="Author"
// //                             onChange={(e)=> setAuthor(e.target.value)}
// //                             value={author}/>
// //                     </Form.Group>
            
//                 // &nbsp;
//                 // <Form.Group controlId="formBookIsbn"><h5>ISBN</h5>
//                 //     <Form.Control
//                 //         type="isbn"
//                 //         placeholder="ISBN"
//                 //         onChange={(e)=> setIsbn(e.target.value)}
//                 //         value={isbn}/>
//                 // </Form.Group>
//                     <Checkbox onChange={(e)=> setReadStatus(e.target.value)}>Read Status</Checkbox>
//                 // <Form.Group controlId="formBookFormat"><h5>Book Format</h5>
//                 //     <Form.Select
//                 //         onChange={(e)=> setFormat(e.target.value)}
//                 //         value={format}>
//                 //             <option>Choose Book Format</option>
//                 //             <option>Hardback</option>
//                 //             <option>Paperback</option>
//                 //             <option>eBook</option>
//                 //             <option>Audiobook</option>
//                 //     </Form.Select>
//                 // </Form.Group>
//                 &nbsp;
//                 <Form.Group controlId="formBookGenre"><h5>Book Genre</h5>
//                     <Form.Select
//                         onChange={(e)=> setGenre(e.target.value)}
//                         value={genre}>
//                             <option>Choose Genre</option>
//                             <option>Action/Adventure</option>
//                             <option>Biography/Autobiography</option>
//                             <option>Children's</option>
//                             <option>Fantasy</option>
//                             <option>General Fiction</option>
//                             <option>Historical Fiction</option>
//                             {/* <option>History</option>
//                             <option>Horror</option>
//                             <option>Literary Fiction</option>
//                             <option>Mystery/Suspense</option>
//                             <option>Poetry</option>
//                             <option>Reference</option>
//                             <option>Romance</option>
//                             <option>Science Fiction</option>
//                             <option>Self Help</option>
//                             <option>True Crime</option>
//                     </Form.Select>
//                 </Form.Group>
//                     <Checkbox onChange={(e)=> setSeries(e.target.value)}>Series?</Checkbox>
//                 <br></br>
//                     <Checkbox onChange={(e)=> setSpecialEdition(e.target.value)}>Special Edition?</Checkbox> 
//                 <br></br>
//                     <Checkbox onChange={(e)=> setFirstEdition(e.target.value)}>First Edidtion?</Checkbox>
//                 <br></br>
//                     <Checkbox onChange={(e)=> setSigned(e.target.value)}>Signed?</Checkbox>
//                 <br></br>
//                     <Button type="submit" variant="danger">
//                         Submit
//                     </Button>
//             </Form>
//         </Container>
//         </React.Fragment> */}