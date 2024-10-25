import { useState } from "react";
import "./AboutPage.css";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    id: "",
    body: "",
    title: "",
  });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form Data Submitted:", formData);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: formData.title,
        body: formData.body,
        userId: formData.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("Data Saved...!");
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Form with 3 Inputs</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* ID Input */}
        <div className="form-group">
          <label className="form-label">ID:</label>
          <input
            type="text"
            name="id"
            placeholder="Enter ID"
            value={formData.id}
            onChange={(event) => {
              const newId = event.target.value;
              setFormData(() => ({
                ...formData,
                id: newId,
              }));
            }}
            className="form-input"
          />
        </div>
        <br />
        {/* Title Input */}
        <div className="form-group">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={(event) => {
              const newTitle = event.target.value;
              setFormData(() => ({
                ...formData,
                title: newTitle,
              }));
            }}
            className="form-input"
          />
        </div>
        <br />
        {/* Body Input */}
        <div className="form-group">
          <label className="form-label">Body:</label>
          <input
            type="text"
            name="body"
            placeholder="Enter Body"
            value={formData.body}
            onChange={(event) => {
              const newBody = event.target.value;
              setFormData(() => ({
                ...formData,
                body: newBody,
              }));
            }}
            className="form-input"
          />
        </div>
        <br />
        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
