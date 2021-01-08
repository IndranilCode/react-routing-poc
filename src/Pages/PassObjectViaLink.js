import React from "react";

const PassObjectViaLink = (props) => {
  console.log(props.data);
  return (
    <div>
      <h2>PassObjectViaLink</h2>
      <label>Data passed : {JSON.stringify(props.data)}</label>
    </div>
  );
};

export default PassObjectViaLink;
