import React, {useEffect, useState } from "react";
import MatchDetailed from "../components/MatchDetailed";
import MatchSmall from "../components/MatchSmall";

import { Link, useParams } from "react-router-dom";

import { PieChart } from "react-minimal-pie-chart";


import "./TeamPage.css";

function TeamPage() {
  const [team, setTeam] = useState({ matchList: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch(`/teams/${teamName}`);
      const data = await res.json();
      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.name) return <h1>Team not Found..</h1>;

  return (

    <div>
      <Link to={`/`}><h3>{'<<'} Home</h3></Link>
      <div className="TeamPage">
      <div className="team-name-section">
        <h1>{team.name}</h1>
      </div>
      <div className="win-loss-section">
        <p>win / loss</p>
        <PieChart
          data={[
            
            { title: "Lose", value: team.matchesPlayed-team.matchesWon, color: "#ff7e67" },
            { title: "Win", value: team.matchesWon, color: "#0da574" }
          ]}
        />
      </div>

      <div className="latest-match-section">
        <h3> Latest match</h3>
        <MatchDetailed teamName={team.name} match={team.matchList[0]} />
      </div>

      {team.matchList.slice(1).map((match) => (
        <MatchSmall key={match.id} teamName={team.name} match={match} />
      ))}

      <div className="more-link">
      <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_MATCH_END_YEAR}`}>More{">>"}</Link>
      </div>
    </div>
    </div>
  );
}

export default TeamPage;
