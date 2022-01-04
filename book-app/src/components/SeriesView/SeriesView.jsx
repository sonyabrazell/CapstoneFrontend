import React from "react";
import axios from "axios";

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

    return ( 
        <React.Fragment>
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
                                        <td>
                                        <Button onClick={removeReadWork(element.id)} color = "danger">Delete Read Work</Button>
                                        </td>
                                    </tr>
                                        )}
                            </tbody>
                    </Table>
                    <Container style={{paddingTop: '10px'}}>
                        <AddOgWork onSubmit={handleSubmit} onClick={()=> setCount(count+{wordCount})}/>
                    </Container>
        </React.Fragment>
    );
}

export default SeriesView;