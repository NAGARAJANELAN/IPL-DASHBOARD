import React, { useEffect, useState } from "react";
import MatchDetailed from "../components/MatchDetailed";


import YearSelector from "../components/YearSelector";

import { useParams } from "react-router-dom";

import './MatchPage.css';

function MatchPage() {

  const [matches, setMatches] = useState([]);
  const { teamName,year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch(`/teams/${teamName}/matches?year=${year}`);
      const data = await res.json();
      setMatches(data);
    };
    fetchMatches();
  }, [teamName,year]);

  if (!matches) return <h1>Match not Found..</h1>;

  return (
    <div>
      <header><h2 className="team-name-year">{teamName} - Matches on {year}</h2></header>
    <div className="MatchPage">
      <div className="year-selector-section">
        <YearSelector teamName={teamName} />
      </div>
      <div></div>
      
      <div className="match-section">
      {matches.map((match) => (
        <MatchDetailed key={match.id} teamName={teamName} match={match} />
      ))}
      </div>
    </div>

    </div>
  );
}

export default MatchPage;
