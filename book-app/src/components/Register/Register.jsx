import React, {useState} from 'react'
import axios from 'axios'
import { Form, FormLabel, Container, Button, Alert} from 'react-bootstrap';

const RegisterUser = () => {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        userName: userName,
        password: password,
        email: email,
    };
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post(
            `http://localhost:8000/api/auth/register/`, newUser    
        );
        console.log(response.data);
        if (response.request.status === 201) {
            <Alert>
                Registration complete! Please sign in.
            </Alert>
            return (window.location = "/login")
        }
    }

    return ( 
        <div align ="center">
            <Container style ={{flex: 1, width: "50%", padding: "10px", paddingTop:'10%'}}>
                <FormLabel><h1>Registration</h1></FormLabel>
                <Form id="contact-form" onSubmit={(e)=> handleSubmit(e)}>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Control
                            type="name"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            width="50%"/>
                    </Form.Group>
                    &nbsp;
                    <Form.Group controlId="formBasicMiddleName">
                        <Form.Control
                        type="name"
                        placeholder="Middle Name"
                        onChange={(e) => setMiddleName(e.target.value)}
                        value={middleName}
                        />
                    </Form.Group>
                    &nbsp;
                    <Form.Group controlId="formBasicLastName">
                        <Form.Control
                        type="name"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        />
                    </Form.Group>
                    &nbsp;
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control
                        type="name"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        />
                    </Form.Group>
                    &nbsp;
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                    </Form.Group>
                    &nbsp;
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </Form.Group>
                    <br></br>
                    <Button type="submit" variant="danger">Submit</Button>
                </Form>
            </Container>
        </div>
    );
}

export default RegisterUser;