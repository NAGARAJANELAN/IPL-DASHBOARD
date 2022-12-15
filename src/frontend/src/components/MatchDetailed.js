import React from "react";
import { Link } from "react-router-dom";

import './MatchDetailed.css';

function MatchDetailed({teamName,match}){
    if(!match) return null;
    const opponent=(match.team1===teamName)?match.team2:match.team1;
    const opponentRoute=`/teams/${opponent}`;
    const teamWon= (match.matchWinner===teamName);
    return(
        <div className={(teamWon)?'MatchDetailed win-card':'MatchDetailed lose-card'}>
            <div className="match-details">
            <p>Vs</p>
            <h2><Link to={opponentRoute}>{opponent}</Link></h2>
            <h2>{match.date}</h2>
            <h3>at {match.venue}</h3>
            <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>
            <div className="additional-details">
                <h3>First Inning </h3>
                <p>{match.team1}</p>
                <h3>Second Inning</h3>
                <p>{match.team2}</p>
                <h3>Man of the Match</h3>
                <p>{match.playerOfMatch}</p>

                <h3>Umpires</h3>
                <p>{match.umpire1} ,{match.umpire2}</p>
            </div>

        </div>
    );
}
export default MatchDetailed;