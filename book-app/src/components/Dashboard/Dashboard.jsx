import React from "react";
import { ProgressBar, Container } from "react-bootstrap";


const Dashboard = () => {
    return ( 
        <Container >
            <div>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />
            </div>
        </Container>
    );
}

export default Dashboard;