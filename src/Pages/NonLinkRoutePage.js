import React from "react";

const NonLinkRoutePage = (props) => {
  console.log(props);
  console.log(props.location.data);

  return (
    <div>
      <h2>NonLinkRoutePage</h2>
      <label>Data passed : {JSON.stringify(props.location.data)}</label>
    </div>
  );
};

export default NonLinkRoutePage;
