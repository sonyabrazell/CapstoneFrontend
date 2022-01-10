import React from "react";
import { Container } from "react-bootstrap";


const SeriesView = (props) => {

    let series = props.series;
    console.log('SV: ', series)

    return ( 
            <React.Fragment>
            {console.log("Series: ", series)}
            <h3 align="center" style={{paddingTop:'100px'}}>Book Series</h3>
            <Container style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', paddingTop: '20px'}}>
                <h4>{series.series_name}</h4>
                {series.map((element, index) => 
                    <div key={index} className="card mb-3" style={{width: '400px', height: 'auto', padding: '5px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={element.book_cover} alt={'book-app/src/static/background.png'} style={{width: "150px", paddingTop: '10px', paddingLeft: '10px'}}/>
                            </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{justifyContent: 'flex-end', alignItems: "end"}}>
                                <h5 align="right" className="card-title">{element.book_title}</h5>
                                <h5 align="right">{element.book_author}</h5>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    
                )}</Container>
                
        </React.Fragment>
    );
}

export default SeriesView;