import React from "react";
import { useParams } from "react-router-dom";

const UrlParamDemo = (props) => {
  let { id } = useParams();

  return (
    <div>
      <h2>UrlParamDemo</h2>
      <label>ID Passed : {id}</label>
    </div>
  );
};

export default UrlParamDemo;
