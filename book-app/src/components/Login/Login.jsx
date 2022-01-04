import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Container, Form, Button, FormLabel } from 'react-bootstrap';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        postUser(userName, userPassword);
    };
    
    const postUser = async (name, password) => {
        let payload = { username: name, password: password};
        let response = await axios.post(`http://localhost:8000/api/auth/login/`, payload);
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        window.location = "/"
    };

    return ( 
        <div>
            <Container align="center" style ={{flex: 1, width: "50%", padding: "10px", paddingTop:'10%'}}>
                <FormLabel><h1 align="center">Login</h1></FormLabel>
                <Form id="contact-form" onSubmit={onFormSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control
                            type="text"
                            name="userName"
                            placeholder="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>
                    </Form.Group>
                    &nbsp;
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            type="text"
                            name="userPassword"
                            placeholder="password"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}/>
                    </Form.Group>
                    &nbsp;<br></br>
                    <Button variant= "danger" type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
    );
}

export default Login;