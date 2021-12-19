import React from "react";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";

const BookTracker = (props) => {

    const [readBook, setReadBook] = useState('')
    const [count, setCount] = useState(0)

    const handleChange = (e) => {
        setReadBook(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.PreventDefault();
        let readBook = {
            readBook: readBook,
        };
        await axios.post('http://localhost:8000/api/auth/library/book_tracker/', readBook, {headers: {Authorization: 'Bearer ' +jwt}});
    }

    return ( 
        //return list of books read with the ability to add new book read. how to tally?
        <Container>
            <ProgressBar striped variant="success" now={count} />
            <Button onClick={()=> setCount(count + 1)} color = "danger">Add Read Book</Button>
        </Container>
    );
}
 
export default BookTracker;