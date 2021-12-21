import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

const AddOgWork = () => {

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
        getCurrentUser();
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
            alert('Work added!')
        }
    }

    return ( 
        <Container style={{flex: 1, width: "50%", padding: "10%"}}>
            <FormLabel><h3>Add New Work</h3></FormLabel>
            <Form id="add-work" onSubmit={(e)=> handleSubmit(e)}>
                <Form.Group controlId="formWorkTitle">
                    Title
                    <Form.Control
                    type="title"
                    placeholder="Title"
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                    />
                </Form.Group>
                &nbsp;
                <Form.Group controlId="formWorkAuthor">
                    Author
                    <Form.Control
                    type="author"
                    placeholder="Author"
                    onChange={(e)=> setAuthor(e.target.value)}
                    value={author}
                    />
                </Form.Group>
                &nbsp;
                <Form.Group controlId="formWordCount">
                    Word Count
                    <Form.Control
                    type="word count"
                    placeholder="Word Count"
                    onChange={(e)=> setWordCount(e.target.value)}
                    value={wordCount}
                    />
                </Form.Group>
                &nbsp;
                <Form.Group controlId="formDateRead">
                    Date Read
                    <Form.Control
                    type="date read"
                    placeholder="Date Read"
                    onChange={(e)=> setDateRead(e.target.value)}
                    value={dateRead}
                    />
                </Form.Group>
                &nbsp;
                <Form.Group controlId="formLink">
                    Source Link
                    <Form.Control
                    type="link"
                    placeholder="Source Link"
                    onChange={(e)=> setLink(e.target.value)}
                    value={link}
                    />
                </Form.Group>
                &nbsp; &nbsp;
                <Button type="submit" variant="danger">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
 
export default AddOgWork;