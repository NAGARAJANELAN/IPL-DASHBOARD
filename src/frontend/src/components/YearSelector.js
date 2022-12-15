import React from "react";
import { Link } from "react-router-dom";

function YearSelector({teamName}){
    const startYear=process.env.REACT_APP_DATA_MATCH_START_YEAR;
    const endYear=process.env.REACT_APP_DATA_MATCH_END_YEAR;
    const years=[];
    for(let i=startYear;i<=endYear;i++){
        years.push(i);
    }
    return(
        <div className="YearSelector">
            <h2>Select year</h2>
            <ul>
                {years.map(year=> <h3 key={year}>
                    <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
                    </h3>)}
            </ul>
        </div>
    );
}
export default YearSelector;