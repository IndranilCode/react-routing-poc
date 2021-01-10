import React from "react";
import { useHistory } from "react-router-dom"

const Contact = (props) => {
    const history = useHistory()

  const gotoRouteNonLinkPage = (e) => {
    let objectToPass = {
        name: "Narendra Modi",
        presentCity: "New Delhi",
        originCity: "Ahmedabad",
      }
    //history.push('/pass-object-non-link', objectToPass)
    history.push({
        pathname: '/pass-object-non-link',
        data: objectToPass
    })
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>
        <h5>Non Link route</h5>
        <button onClick={() => gotoRouteNonLinkPage()}>
          Route to NonLinkPage
        </button>
      </p>
    </div>
  );
};

export default Contact;
