import React from "react";
import { Container } from "react-bootstrap";
import DataVisualization from "../DataVisualization/DataVisualization";


const Dashboard = () => {

    // trackers = [
    //     {key:'booksReadThisYear', name: 'Books Read This Year'},
    //     {key:'booksReadByMonth', name: 'Books Read by Month'},
    //     {key:'worksReadThisYear', name: 'Works Read This Year'},
    //     {key:'worksReadByMonth', name: 'Works Read by Month'},
    //     {key:'wordsReadByMonth', name: 'Words Read by Month'},
    // ]



return (
    <React.Fragment>
        <div style={{paddingTop:'20%'}}/>
            <h4>Hello, reader.</h4>
            <Container flex style={{flexWrap:'wrap', alignContent:'space-around'}}>
            </Container>
    </React.Fragment>
)}


export default Dashboard;