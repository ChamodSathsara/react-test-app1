import React from "react";
import "./RoundButton.css";

export default function RoundButton(props) {
  return (
    <>
      <button
        style={{ backgroundColor: props.color }}
        className="my-btn"
        onClick={props.event}
      >
        {props.title}
      </button>
    </>
  );
}
