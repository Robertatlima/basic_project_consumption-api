import { Link } from "react-router-dom";

import "./error.css";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <h3>Oh oh! Página não encotrada :(</h3>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Error;
