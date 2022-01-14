import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import DataVisualization from "../DataVisualization/DataVisualization";
import { Charts } from "../SampleData/SampleByMonth";
import { WordChart } from "../SampleData/SampleWordsByMonth";


const Dashboard = ({user}) => {

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
            {!user && (
            <React.Fragment>
            <Container as={Col}>
                <div className="card mb-3" style={{width: '150px', height: '100px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                    <h4>Hello, reader.</h4>
                </div>
            <br/>
            </Container>
            </React.Fragment>
            )}
            {user && (
            <React.Fragment>
                <div className="card mb-3" style={{width: '550px', height: 'auto', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h4>counts by month</h4>
                        <Charts />
                </div>
            <br/>
            <Container as={Col}>
                <div className="card mb-3" style={{ width: 'auto', height: '475px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                    <h4>words by month</h4>
                    <br/>
                    <WordChart />
                </div>
            </Container>
            <Container as={Col}>
                <Container flex style={{flexWrap:'wrap', alignContent:'space-around'}}>
                    <div className="card mb-3" style={{width: '175px', height: '150px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h2>6</h2><h4>books read</h4>
                    </div>
                    <div className="card mb-3" style={{width: '175px', height: '150px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h2>5</h2><h4>works read</h4>
                    </div>
                    <div className="card mb-3" style={{width: '175px', height: '150px', padding: '10px', borderRadius: '25px', boxShadow: '10px 10px #f2acb9'}}>
                        <h2>1,034,280</h2><h4>words read</h4>
                    </div>
                </Container>
                </Container>
            </React.Fragment>
            )}
        </Row>
    </React.Fragment>
)}


export default Dashboard;