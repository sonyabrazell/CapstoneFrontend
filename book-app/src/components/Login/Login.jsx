import axios from 'axios';
import React from 'react';

const Login = (props) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        postUser(userName, userPassword);
    };
    
    const postUser = async (name, password) => {
        let payload = { username: name, password: password};
        let response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, payload);
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        window.location = "/"
    };

    return ( 
        <div align="center">
            <Container>
                <FormLabel>Login</FormLabel>
                <Form id="contact-form" onSubmit={onFormSubmit}>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.controlId
                            type="text"
                            name="userName"
                            placeholder="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>
                    </Form.Group>
                    &nbsp;
                    <Form.Group controlId="formBasicLastName">
                        <Form.controlId
                            type="text"
                            name="userPassword"
                            placeholder="password"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}/>
                    </Form.Group>
                    &nbsp;
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
    );
}

export default Login;