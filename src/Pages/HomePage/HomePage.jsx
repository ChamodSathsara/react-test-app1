import React, { useState } from "react";
import "./HomePage.css";
import RoundButton from "../../Component/RoundButton/RoundButton";

export default function HomePage() {
  const [obj, setObj] = useState({
    name: "",
    age: "",
  });

  const clickBtn = () => {
    console.log(obj);
  };

  return (
    <>
      <h1>HomePage</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(event) => {
          let newName = event.target.value;

          setObj({ ...abj, [name]: newName });
        }}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Enter your age"
        onChange={(event) => {
          let newAge = event.target.value;
          setObj((obj) => ({
            ...obj,
            age: newAge,
          }));
        }}
      />
      <br /> <br />
      <RoundButton event={clickBtn} color={"red"} title={"homePage Clicked"} />
    </>
  );
}
