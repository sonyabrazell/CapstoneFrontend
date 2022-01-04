// import React from "react";
// import axios from "axios";
// import { Button, Offcanvas, Container } from "react-bootstrap";

// const RelatedSearch = () => {

    
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => (
//         (setShow(true))
//         (getRelatedBooks()));

//     const getRelatedBooks = async (book_genre) => {
//         let API_URL = `https://www.googleapis.com/books/v1/volumes`;
//         let response = await axios.get(`${API_URL}?q=${book_genre}`)
//             setRelatedBooks(response.data.items)
//     }

//     return (
//         <>
//             <Button variant="danger" onClick={handleShow} className="me-2">
//                 Related Books
//             </Button>
//             <Offcanvas show={show} onHide={handleClose} {...props}>
//             <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Related Books</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//                 <React.Fragment>
//                     <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
//                     {['bottom'].map((placement, idx) => (
//                         <OffCanvasExample key={idx} placement={placement} name={placement} />
//                         {relatedBooks.map((element, index) =>
//                             <div key={index} className="card mb-3" align="right" style={{ width: '500px', height: '400px',padding: '5px'}}>
//                                 <div className="row no-gutters">
//                                     <div className="col-md-4">
//                                         <img src={`${element.book_cover}`} alt={`${element.book_title}`} style={{width: '200px', paddingTop:'10px', paddingLeft:'10px'}}/>
//                                     </div> 
//                                     <div className="col-md-8">
//                                     <div className="card-body">
//                                         <h2 align ="right" className="card-title">{element.book_title}</h2>
//                                         <h5 align="right">{element.book_author}</h5>
//                                         <p align="right">ISBN: {element.book_isbn}</p>
//                                         <div align="right" style={{width: '200px', flexWrap: "wrap", justifyContent: "space-evenly"}}>
//                                                 <Badge align="right" pill bg="dark">
//                                                 {element.book_genre}</Badge> 
//                                                 <Badge pill bg="dark">{element.book_format}</Badge> &nbsp;
//                                                 {element.special_edition === true ? (
//                                                 <Badge pill bg="dark">Special Edition</Badge>
//                                             ) : ''}
//                                                 {element.first_edition === true ? (
//                                                 <Badge pill bg="dark">First Edition</Badge> 
//                                             ) : ''} 
//                                                 {element.signed === true ? (
//                                                 <Badge pill bg="dark">Signed</Badge>
//                                             ) : ''}
//                                                 {element.book_series === true ? (
//                                                         <Badge pill bg="dark">{element.series_name}</Badge>
//                                                     ): ''}
//                                                     {element.read_status === true ? (
//                                                         <Badge pill bg="dark">Read</Badge>
//                                                     ): ''} 
//                                         {/* <p align="right">{element.first_sentence}</p> */}
//                                             </div>    
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )} 
//                         </Container>
//                     </React.Fragment>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//         });
// }

// export default RelatedSearch;