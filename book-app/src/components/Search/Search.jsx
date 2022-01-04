// import React, { useState } from "react";
// import axios from "axios";
// import { Button, Container } from "react-bootstrap";

// const Search = () => {

//     const [searchResult, setSearchResult] = useState([]);
//     const [input, setInput] = useState('');
    
//     let API_URL = `https://www.googleapis.com/books/v1/volumes`;

//     const handleChange = (e) => {
//         const input = e.target.value;
//         setInput(input);
//     };

//     const handleSubmit = (e, input) => {
//         e.preventDefault();
//         const response = axios.get(`${API_URL}?q=${input}&maxResults=10`)
//         .then(response => {
//             console.log(response.data.items);
//             setSearchResult(response.data.items);
//         })
//     }

//     const handleClick = async (e, elementId) => {
//         e.preventDefault();
//         const jwt = localStorage.getItem('token')
//         let response = axios.post('http://localhost:8000/library/books/', elementId, {headers: {Authorization: 'Bearer ' + jwt}})
//         console.log(response.data);
//         if (response.request.status === 201)
//         {
//             alert('Book added to library, thank you')
//         } //adds search result book to library
//     }

//     return ( 
//         <React.Fragment>
//         <div style={{paddingTop: "10%"}}/>
//         <h1 align="center">Book Search</h1>
//     <Container style={{paddingTop:"20px", align:"center"}} align="center">
//         <div className="search-bar ui segment" align="center">
//             <div className="field" align="center">
//                 <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
//                         <input
//                             id="input"
//                             type="text"
//                             placeholder="Search by Title or Author"
//                             className="me-2"
//                             aria-label="Search"
//                             value={input}
//                             onChange={handleChange}/>
//                     <button type="submit" variant="danger">Search</button>
//                 </form>
//             </div>
//         </div>
//         </Container>
//         <Container>
//             {searchResult.map(book, index =>
//         <div className="card mb-3" style={{width: '500px'}} key={index} >
//             <div className="row no-gutters">
//                 <div className="col-md-4">
//                     <img
//                     className="bd-placeholder-img"
//                     width="100%"
//                     height="250"
//                     src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
//                     alt={`${book.volumeId.title}`}
//                     aria-label="Book Cover"
//                     preserveAspectRatio='xMidyMid slice'>
//                         <title>Placeholder</title>
//                         <rect width="100%" height="100%" fill="#f2acb9"/>
//                     </img>
//                 </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className ="card-title">Title: {book.volumeId.title}</h5>
//                             <h2>Author: {book.volumeId.authors}</h2>
//                         </div>
//                     </div>
//             </div>
//                 <Button variant="danger" onClick={(e) => handleClick(e, book.volumeId.id)}>Add to Library</Button>
//         </div>
//         )}
//     </Container>
//     </React.Fragment>
//     );
// }
 
// export default Search;