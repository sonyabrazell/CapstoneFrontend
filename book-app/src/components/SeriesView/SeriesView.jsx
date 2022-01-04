import React from "react";
import axios from "axios";

const SeriesView = () => {

    //add table column to have an optional field for series name. 
    //get call for all books in a column with matching series name field
    //map display

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
                                {work.map((element, index) => 
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