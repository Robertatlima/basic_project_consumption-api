import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        Mega Flix
      </Link>
      <Link className="favorites" to="/favorites">
        Meus filmes
      </Link>
    </div>
  );
}

export default Header;
