import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMSHLca5-s_hetHOyzKB_NyzuD8T7lFZoAw&usqp=CAU"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Harry Potter"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hxyA9K3eMC91lUFjELPMsTvDPAqM1Bcp33ufdyJv5hpmY8WG3tEdl7tNwkT_HQQ2mVM&usqp=CAU"
      tel="+123 456 789"
      email="h@potter.com"
    />

    <Card
      name="Rapunzel"
      img="https://rotoscopers.com/wp-content/uploads/2013/10/Rapunzel-tangled-35302465-794-1080-220x300.jpg"
      tel="+123 456 789"
      email="r@tangel.com"
    />
  </div>,
  document.getElementById("root")
);
