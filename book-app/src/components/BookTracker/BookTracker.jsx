import React, { useState } from "react";
// import axios from "axios";
// import { ProgressBar, Container, Button } from "react-bootstrap";


// const BookTracker = (book_id) => {

//     const [readBook, setReadBook] = useState('')
//     const [count, setCount] = useState(0)

//     const handleChange = (e) => {
//         setReadBook(e.target.value);
//     }; //handle change on submit

//     const handleSubmit = async (e) => {
//         e.PreventDefault();
//         await axios.post('http://localhost:8000/library/book_tracker', readBook, {headers: {Authorization: 'Bearer ' +jwt}});
//     } // on submit posting to book_tracker database

//     //where to change read_status from false to true in user's library

//     const removeReadBook = async (book_id) => {
//         const jwt = localStorage.getItem('token')
//         axios.delete(`http://localhost:8000/library/book_tracker/delete/${book_id}`, {headers: {Authorization: 'Bearer ' + jwt}})
//     } //need to remove book from tracker, set read_status back to false

//     return ( 
//         //return list of books read with the ability to add new book read. how to tally?
//         <Container>
//             <ProgressBar striped variant="success" now={count} />
//             <Button 
//             onClick={()=> setCount(count + 1)} 
//             onSubmit={handleSubmit} 
//             onChange={handleChange} 
//             color = "danger">
//                 Add Read Book</Button>
//             <Button 
//             onClick={()=> setCount(count - 1), removeReadBook(book_id)} 
//             onSubmit={handleSubmit} 
//             onChange={handleChange} 
//             color = "danger">
//                 Delete Read Book</Button>
//         </Container>
//     );
// }

// export default BookTracker;