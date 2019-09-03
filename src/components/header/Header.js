import React from "react";
import { Link } from "react-router-dom";

const Header = ({ playerNum, title }) => {
  return (
      <div className="container">
        <header>
          <h1>
            {title} {playerNum}
          </h1>
          <h3>
            <Link to="/players/" onClick={() => localStorage.clear()}>
              New Game
            </Link>
          </h3>
        </header>
      </div>
  );
};

export default Header;
