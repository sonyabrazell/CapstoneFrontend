import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import SeriesView from "../SeriesView/SeriesView";

function OffCanvasSeries({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button size='sm' variant="danger" onClick={handleShow} className="me-2">
                Show Books in Series
            </Button>
            <Offcanvas style={{backgroundColor:'#400101' , height: '400px'}} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title><h3>Book Series</h3></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SeriesView />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
    }

    function Series() {
    return (
        <>
            {['bottom'].map((placement, idx) => (
            <OffCanvasSeries key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
}

export default Series;