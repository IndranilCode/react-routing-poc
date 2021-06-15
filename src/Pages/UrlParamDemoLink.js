import React from "react";
//import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UrlParamDemoLink = (props) => {
  const history = useHistory();

  const gotoUrlParamDemoPage = () => {
    console.log("gotoUrlParamDemoPage");
    history.push('/url-param-demo/indranil')
    //props.router.push("/url-param-demo/indranil");
  };

  return (
    <p style={{ display: "flex", "align-items": "center" }}>
      <h5>5. Url Param demo /:id ={">"} </h5>
      <button onClick={() => gotoUrlParamDemoPage()}>
        Goto Url Param demo page
      </button>
    </p>
  );
};

export default UrlParamDemoLink;
