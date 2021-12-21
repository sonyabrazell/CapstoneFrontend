import React from "react";
import axios from "axios";

const AddReadBook = () => {

    const [readBook, setReadBook] = useState('')

    const handleChange = (e) => {
        setReadBook(e.target.value);
     }; //handle change on submit

    const handleSubmit = async (e) => {
        e.PreventDefault();
        await axios.post('http://localhost:8000/library/book_tracker', readBook, {headers: {Authorization: 'Bearer ' +jwt}});
    }


    return ( 
        <React.Fragment>
            <Container style={{padding: '20px', backgroundColor: '#f2acb9'}}>
                <FormLabel><h2>Add Book</h2></FormLabel>
                <Form onSubmit={(e)=> handleSubmit(e)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="title" 
                                placeholder="Title"
                                onChange={(e)=> setTitle(e.target.value)}
                                value={title}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control 
                                type="Author" 
                                placeholder="Author"
                                onChange={(e)=> setAuthor(e.target.value)}
                                value={author} />
                        </Form.Group>
                    </Row>
                        <Form.Group className="mb-3" controlId="formGridIsbn">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control 
                                type="ISBN"
                                placeholder="ISBN"
                                onChange={(e)=> setIsbn(e.target.value)}
                                value={isbn}/>
                        </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formBookFormat">
                            <Form.Label>Book Format</Form.Label>
                            <Form.Select 
                                defaultValue="Choose..."
                                onChange={(e)=> setFormat(e.target.value)}
                                value={format}>
                                <option>Choose...</option>
                                <option>Hardback</option>
                                <option>Paperback</option>
                                <option>eBook</option>
                                <option>Audiobook</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBookGenre">
                            <Form.Label>Book Genre</Form.Label>
                            <Form.Select 
                                defaultValue="Choose..."
                                onChange={(e)=> setGenre(e.target.value)}
                                value={genre}>
                                <option>Choose...</option>
                                <option>Action/Adventure</option>
                                <option>Biography/Autobiography</option>
                                <option>Children's</option>
                                <option>Fantasy</option>
                                <option>General Fiction</option>
                                <option>Historical Fiction</option>
                                <option>History</option>
                                <option>Horror</option>
                                <option>Literary Fiction</option>
                                <option>Mystery/Suspense</option>
                                <option>Poetry</option>
                                <option>Reference</option>
                                <option>Romance</option>
                                <option>Science Fiction</option>
                                <option>Self Help</option>
                                <option>True Crime</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formCheckboxes" style={{padding: '5px'}}>
                            <Checkbox value={readStatus} onChange={(e)=> setReadStatus(e.target.checked)}> Read Status</Checkbox> &nbsp; &nbsp; &nbsp;
                            <Checkbox value={series} onChange={(e)=> setSeries(e.target.checked)}> Series?</Checkbox> &nbsp; &nbsp; &nbsp;
                            <Checkbox value={specialEdition} onChange={(e) => setSpecialEdition(e.target.checked)}> Special Edition?</Checkbox> &nbsp;
                            <Checkbox value={firstEdition} onChange={(e)=> setFirstEdition(e.target.checked)}> First Edidtion?</Checkbox> &nbsp; &nbsp; &nbsp;
                            <Checkbox value={signed} onChange={(e)=> setSigned(e.target.checked)}> Signed?</Checkbox>
                        </Form.Group>
                    </Row>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </React.Fragment>
    );
}
 
export default AddReadBook;