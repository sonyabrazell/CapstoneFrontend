import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import RelatedBooks from "../RelatedBooks/RelatedBooks";

function OffCanvasRelated({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <Button size='sm' variant="danger" onClick={handleShow} className="me-2">
                Get Related Books
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <RelatedBooks />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
    }
  
    function Related() {
    return (
        <>
            {['bottom'].map((placement, idx) => (
            <OffCanvasRelated key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
}
  
export default Related;