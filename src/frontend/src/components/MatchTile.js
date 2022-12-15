import React from "react";
import { Link } from "react-router-dom";
import './MatchTile.css';

function MatchTile({teamName}) {

  return (
    <div>
      <Link to={`/teams/${teamName}`}>
    <div className="MatchTile">
      <h3>{teamName}</h3>
    </div>
    </Link>
    </div>
  );
}
export default MatchTile;
