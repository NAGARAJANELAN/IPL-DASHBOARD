import React from "react";
import { Link } from "react-router-dom";

import './MatchSmall.css';

function MatchSmall({teamName,match}){
    const opponent=(match.team1===teamName)?match.team2:match.team1;
    const opponentRoute=`/teams/${opponent}`;
    const teamWon= (match.matchWinner===teamName);
    return(
        <div className={(teamWon)?'MatchSmall win-card':'MatchSmall lose-card'}>
            
            <h3>Vs <Link to={opponentRoute}>{opponent}</Link></h3>
            <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    );
}
export default MatchSmall;