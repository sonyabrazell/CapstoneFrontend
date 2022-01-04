import React, {useState, useEffect} from "react";
import axios from "axios";
import { Popover, Table, Overlay, OverlayTrigger, Button } from "react-bootstrap";


const SeriesView = () => {

    const [books, setBooks] = useState([]);
    const [series, setSeries] = useState([]);


    useEffect(() => {
        getBooks();
        setSeries(books.filter((book) => book.series === true));
        console.log(series)
        }, [books])

    const getBooks = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/library/', { headers: { Authorization: 'Bearer ' + jwt } })
        setBooks(response.json)
    }

    const popover = (
        <Popover id="popover-basic">
        <Popover.Header as="h3">Series View</Popover.Header>
        <Popover.Body>
            
        </Popover.Body>
        </Popover>
    );

    const SeriesPopover = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">Click me to series</Button>
        </OverlayTrigger>
    );
    

    return ( 
        <React.Fragment>
        <SeriesPopover >
            <div style={{paddingTop: "10%"}} />
            <h1 align="center">Book Series</h1>
                    <Table align="center">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Series Name</th>
                            </tr>
                        </thead>
                            <tbody>
                                {series.map((element, index) => 
                                    <tr key={index}>
                                        <td>
                                            {element.book_title}
                                        </td>
                                        <td>
                                            {element.book_author}
                                        </td>
                                        <td>
                                            {element.series_name}
                                        </td>
                                    </tr>
                                        )}
                            </tbody>
                    </Table>
                </SeriesPopover>
        </React.Fragment>
    );
}

export default SeriesView;