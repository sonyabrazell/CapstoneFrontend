import React, { useState } from "react";
import axios from "axios";
import { Offcanvas, Button } from "react-bootstrap";
import SeriesView from "../SeriesView/SeriesView";

function OffCanvasSeries({ name, ...props }) {
    const [show, setShow] = useState(false);
    const [books, setBooks] = useState([]);
    const [series, setSeries] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        handleShow();
        getBooks();
    }

    let seriesName = props.series_name;
    console.log(seriesName)

    const getBooks = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/library/', { headers: { Authorization: 'Bearer ' + jwt } })
        setBooks(response.data);
        console.log('Series View Books:', books);
        getSeries(books);
    }

    const getSeries = () => {
        books.filter((books) => {
            let filteredBooks = books.series_name.includes(seriesName)
            return setSeries(filteredBooks);
        })
        console.log('Filtered Series: ', series)
    };
    

    return (
        <>
            <Button size='sm' variant="danger" onClick={handleClick} className="me-2">
                Show Books in Series
            </Button>
            <Offcanvas style={{backgroundColor:'#400101' , height: '400px'}} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title><h3>Book Series</h3></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SeriesView series={series}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
    }

    function Series(props) {

        let series_name = props.series_name

    return (
        <>
            {['bottom'].map((placement, idx) => (
            <OffCanvasSeries series_name={series_name} key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
}

export default Series;