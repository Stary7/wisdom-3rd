import React, { useState } from 'react';

const ProjectForm = ({ onSubmit, initialData = {} }) => {
  const [project, setProject] = useState({
    details: '',
    reraStatus: false,
    financials: { budget: 0, expenditure: 0 },
    media: [],
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('financials')) {
      const key = name.split('.')[1];
      setProject({
        ...project,
        financials: { ...project.financials, [key]: value },
      });
    } else {
      setProject({ ...project, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(project);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="details" value={project.details} onChange={handleChange} placeholder="Project Details" />
      <input type="checkbox" name="reraStatus" checked={project.reraStatus} onChange={(e) => setProject({ ...project, reraStatus: e.target.checked })} />
      <input type="number" name="financials.budget" value={project.financials.budget} onChange={handleChange} placeholder="Budget" />
      <input type="number" name="financials.expenditure" value={project.financials.expenditure} onChange={handleChange} placeholder="Expenditure" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
