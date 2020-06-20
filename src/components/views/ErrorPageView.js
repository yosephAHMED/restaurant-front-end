import React from "react";
import { Banner } from "../functionComponents";
import { Link } from "react-router-dom";

const ErrorPageView = (props) => {
  return (
    <Banner title="404" subtitle="page not found">
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </Banner>
  );
};

export default ErrorPageView;
