import React, { useEffect, useState } from "react";
import MyCard from "../../Component/MyCard/MyCard";

function LoadAllPage() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    // loadAllData();
    console.log(data);
  }, [data]);

  const loadAllData = () => {
    fetch("http://localhost:3000/laptop")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  const fetchData = () => {};

  return (
    <div>
      <h1>Load All data</h1>
      <input
        type="text"
        placeholder="Enter Ypur Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={loadAllData}>Load All</button>
      {data.map((post) => (
        <MyCard
          key={post._id}
          id={post._id}
          brand={post.brand}
          model={post.model}
          ram={post.ram}
        />
      ))}
    </div>
  );
}

export default LoadAllPage;
