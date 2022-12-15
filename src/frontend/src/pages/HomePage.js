import React, { useEffect, useState } from "react";

import MatchTile from "../components/MatchTile";
import "./HomePage.css";

function HomePage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await fetch(`/teams`);
      const data = await res.json();
      setTeams(data);
    };
    fetchTeams();
  }, []);

  return (
    <div>
      <h1 className="heading">IPL DASHBOARD</h1>
      <div className="HomePage">
        
          {teams.map((team) => (
            <MatchTile key={team.id} teamName={team.name} />
          ))}
      </div>
      <footer><br></br><br></br> Created by Nagarajan E <br></br>Sri Venkateswara College of Engineering</footer>
    </div>
  );
}
export default HomePage;
