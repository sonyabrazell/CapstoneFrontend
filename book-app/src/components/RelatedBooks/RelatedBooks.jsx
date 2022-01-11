import React from "react";
// import axios from "axios";
import { Container } from "react-bootstrap";

const RelatedBooks = (props) => {

    let relatedBooks = props.relatedBooks;

    console.log(relatedBooks)

    // const handleClick = async (e, elementId) => {
    //     e.preventDefault();
    //     const jwt = localStorage.getItem('token')
    //     let response = await axios.post('http://localhost:8000/library/books/', elementId, {headers: {Authorization: 'Bearer ' + jwt}})
    //     console.log(response.data);
    //     setloadData(!loadData)
    //     if (response.request.status === 201)
    //     {
    //         <Alert variant="secondary">
    //             Book added to library, thank you!
    //         </Alert>
    //     }} //adds search result book to library
    
    return ( 
        <React.Fragment>
        <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {relatedBooks.map((element, index)=>
            <div className="card mb-3" style={{width:'400px', height:'auto', borderRadius: '25px', padding: '10px', boxShadow: '10px 10px #f23a29'}} key={index}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`http://books.google.com/books/content?id=${element.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt={`${element.volumeInfo.title}`} style={{width: '150px', borderRadius: '25px'}}/>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className ="card-title">Title: {element.volumeInfo.title}</h5>
                                <p>Author: {element.volumeInfo.authors}</p>
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
};

export default RelatedBooks;

