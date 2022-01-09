import React from 'react'
import { Button, Container } from 'react-bootstrap';

const Logout = () => {
    
    const deleteToken = () => {
        localStorage.clear();
        window.location = '/';
    }

    return (
        <Container style={{paddingTop: '10%'}}>
        <div align="center">
            <h2>Are you sure you want to logout?</h2>
            &nbsp;
            <Button variant="danger" type="submit" onClick={(e)=> deleteToken(e)}>Logout</Button> &nbsp;
            <Button variant="danger" onClick={() => window.location = '/'}>Return Home</Button>
        </div>
        </Container>
    )
}

export default Logout;