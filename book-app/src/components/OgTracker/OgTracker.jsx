import React from "react";
import axios from "axios";

const OgTracker = ({user}) => {

    const [readWork, setReadWork] = useState('')
    const [count, setCount] = useState(0)
    const [work, setWork] = useState([])

    const handleChange = (e) => {
        setReadWork(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.PreventDefault();
        await axios.post('http://localhost:8000/library/og_tracker', readWork, {headers: {Authorization: 'Bearer ' +jwt}})
    } // on submit posting to og_tracker database

    const removeReadWork = async (work_id => {
        const jwt = localStorage.getItem('token')
        await axios.delete(`http://localhost:8000/library/book_tracker/delete/${work_id}`, {headers: {Authorization: 'Bearer ' + jwt}})
    })

    const getWork = async () => {
        const jwt =localStorage.getItem('token')
        await axios.get('http://localhost:8000/library/og_tracker', {header: {Authorization: 'Bearer ' + jwt}})
        setWork(response.data)
    }

    return ( 
        <Container>
            <ProgressBar striped variant="success" now={count} />
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Word Count</th>
                        <th>Date Read</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {work.map((element, index) => <tr key={index}>
                        <td>
                            <Row>
                                <Col>
                                </Col>
                                </Row>
                                </td>
                                )}
                </tbody>
            </Table>
            <Button type="submit" onSubmit={handleSubmit} onClick={()=> setCount(count + 1)} color = "danger">Add Read Work</Button>
            <Button onClick={()=> {setCount(count - 1)},{removeReadWork(work_id)}} color = "danger">Delete Read Work</Button>
        </Container>
    );
}
 
export default OgTracker;