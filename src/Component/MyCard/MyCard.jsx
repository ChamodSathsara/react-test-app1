import React from "react";
import "./MyCard.css";

export default function MyCard(props) {
  const deleteData = () => {
    fetch("http://localhost:3000/" + props.id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((json) => {
        console.log(json);
      });
  };

  const updateData = () => {};

  return (
    <div className="card">
      <h3 className="card-title">{props.id}</h3>
      <p className="card-body">
        <strong>Brand: {props.brand}</strong>
      </p>
      <p className="card-body">
        <strong>Model: {props.model}</strong>
      </p>
      <p className="card-body">
        <strong>Ram: {props.ram}</strong>
      </p>
      <button onClick={deleteData}>Delete</button>
      <button>Update</button>
    </div>
  );
}
