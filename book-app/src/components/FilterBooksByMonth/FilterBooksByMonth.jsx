import React, {useState} from "react";
import { useEffect } from "react";

const BookFilter = () => {

    const [filterParam, setFilterParam] = useState(['All']);

// pass in props from the api call from data visualization.

    function search(items) {
        return items.filter((item)=> {
            if(item.date_read == filterParam) {
                return searchParam.some((newItem)=> {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem)=> {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        })
    }

    return ( 
        <div>
            <select
            onChange={(e) => {
                setFilterParam(e.target.value);
            }}
            className='custom-select'
            aria-label="Filter Books Read By Month">
                <option value="All">Filter By Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <span ClassName="focus"></span>
        </div>
    );
};
 
export default BookFilter;