import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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
        <div style={{display: 'flex', alignItems: 'flex-end', paddingTop:'15%'}}/>
        <Row>
            <Container as={Col}>
                <div className="card mb-3" style={{width: '150px', height: '100px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                    <h4>Hello, reader.</h4>
                </div>
            <br/>
                <div className="card mb-3" style={{width: '550px', height: '300px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h4>counts by month</h4>
                </div>
            </Container>
            <Container as={Col}>
                <div className="card mb-3" style={{width: '300px', height: '500px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                    <h4>words by month</h4>
                </div>
            </Container>
            <Container as={Col}>
                <Container flex style={{flexWrap:'wrap', alignContent:'space-around'}}>
                    <div className="card mb-3" style={{width: '150px', height: '150px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h2>#</h2><h4>books read</h4>
                    </div>
                    <div className="card mb-3" style={{width: '150px', height: '150px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h2>#</h2><h4>works read</h4>
                    </div>
                    <div className="card mb-3" style={{width: '150px', height: '150px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h2>#</h2><h4>words read</h4>
                    </div>
                </Container>
            </Container>
        </Row>
    </React.Fragment>
)}


export default Dashboard;