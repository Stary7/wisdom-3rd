import React, { useState, useEffect } from "react";
import "./developer.css";
const DeveloperForm = ({ onSubmit, initialData = {} }) => {
  const [developer, setDeveloper] = useState({
    name: "",
    address: "",
    incorporationDate: "",
    totalProjects: 0,
    totalSqFt: 0,
    reasonForChoosing: "",
    website: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setDeveloper({ ...developer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(developer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={developer.name}
        onChange={handleChange}
        placeholder="Developer Name"
        required
      />
      <input
        type="text"
        name="address"
        value={developer.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="date"
        name="incorporationDate"
        value={developer.incorporationDate}
        onChange={handleChange}
        placeholder="Incorporation Date"
      />
      <input
        type="number"
        name="totalProjects"
        value={developer.totalProjects}
        onChange={handleChange}
        placeholder="Total Projects"
      />
      <input
        type="number"
        name="totalSqFt"
        value={developer.totalSqFt}
        onChange={handleChange}
        placeholder="Total Sq Ft Delivered"
      />
      <input
        type="text"
        name="reasonForChoosing"
        value={developer.reasonForChoosing}
        onChange={handleChange}
        placeholder="Reason for Choosing Developer"
      />
      <input
        type="url"
        name="website"
        value={developer.website}
        onChange={handleChange}
        placeholder="Website Link"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeveloperForm;
