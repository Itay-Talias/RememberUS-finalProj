import { Link } from "react-router-dom";
import "./Start.css";

function Start() {
  return (
    <div className="FirstBtn">
      <Link to="/Login" style={{ textDecoration: "none" }}>
        {<h2>Let's start</h2>}
      </Link>
    </div>
  );
}

export default Start;