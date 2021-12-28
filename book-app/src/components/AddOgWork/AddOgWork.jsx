import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Container, Button, FormLabel, Row, Col, Alert } from "react-bootstrap";

const AddOgWork = ({user}) => {

    //allows user to add a read work to og_tracker

    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [wordCount, setWordCount] = useState('');
    const [dateRead, setDateRead] = useState('');
    const [link, setLink] = useState('');

    const newWork = {
        user: userId,
        work_title: title,
        work_author: author,
        word_count: wordCount,
        work_date_read: dateRead,
        work_link: link,
    }

    useEffect(()=> {
        getCurrentUser(user);
    },[])

    let getCurrentUser = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('', {headers: {Authorization: 'Bearer ' + jwt}});
        setUserId(response.data.id)
    } //ensuring work is added to correct library tracker

    let handleSubmit = async (e) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token');
        let response = await axios.post('http://localhost:8000/api/auth/library/og_tracker/', newWork, {headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data);
        if (response.request.status === 201)
        {
            <Alert variant="secondary">
            Work Added, thank you!
            </Alert>
        }
    }

    return ( 
        <React.Fragment>
            <Container style={{padding: '20px', backgroundColor: '#f2acb9'}}>
                <FormLabel><h2>Add Work</h2></FormLabel>
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
                        <Form.Group as={Col} controlId="formGridWordCount">
                            <Form.Label>Word Count</Form.Label>
                            <Form.Control 
                                type="Word Count"
                                placeholder="Word Count"
                                onChange={(e)=> setWordCount(e.target.value)}
                                value={wordCount}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formDateRead">
                            <Form.Label>Date Read</Form.Label>
                            <Form.Control
                                type="Date Read"
                                placeholder="Date Read"
                                onChange={(e)=> setDateRead(e.target.value)}
                                value={dateRead} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                type="Link"
                                placeholder="Link to Work"
                                onChange={(e)=> setLink(e.target.value)}
                                value={link} />
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
 
export default AddOgWork;