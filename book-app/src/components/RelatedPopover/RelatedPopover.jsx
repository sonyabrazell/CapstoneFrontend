import React from "react";
import RelatedBooks from "../RelatedBooks/RelatedBooks";
import { useEffect, useState,  } from "react";
import { Popover, OverlayTrigger, Button,  } from "react-bootstrap";


const RelatedPopover = (books) => {

    const UpdatingPopover = React.forwardRef(
        ({ popper, children, show: _, ...props }, ref) => {
            useEffect(() => {
            console.log('updating!');
            popper.scheduleUpdate();
        }, [children, popper]);
    
        return (
            <Popover ref={ref} body {...props}>
                {children}
            </Popover>
        )
        },
    );
    
    const longContent = `
        Very long
        Multiline content
        that is engaging and what-not
    `;
    const shortContent = 'Short and sweet!';
    
    function RelatedPop() {
        const [content, setContent] = useState(shortContent);
    
        useEffect(() => {
        const timerId = setInterval(() => {
            setContent(content === shortContent ? longContent : shortContent);
        }, 3000);
    
        return () => clearInterval(timerId);
        });
    
        return (
            <OverlayTrigger
            trigger="click"
            overlay={
            <UpdatingPopover id="popover-contained"></UpdatingPopover>
            }
        >
        <Button variant="danger">Get Related Books</Button>
        </OverlayTrigger>
        );
    }
    
return (
    <React.Fragment>
        <RelatedPop />;
        <RelatedBooks books={books}/>;
    </React.Fragment>);

}

export default RelatedPopover;