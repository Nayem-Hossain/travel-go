import React from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../../images/404-notFound-page.jpg";

const PageNotFound_404 = () => {
  return (
    <div className="text-center">
      <img className="w-75" src={ErrorPage} alt="" srcset="" />
      <div className="d-flex justify-content-center">
        <Link to="/home">
          <button className="fw-bold btn btn-danger my-4 button">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound_404;
