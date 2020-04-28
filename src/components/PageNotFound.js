import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../404.png";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={ErrorImage} alt="Page Not Found" width={"50%"} />
      {/* <h2>Page Not Found</h2> */}
      <p style={{ paddingTop: "1em" }}>
        <Link to="/" className="btn btn-outline-primary">
          &lt;-- Back to Home
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
