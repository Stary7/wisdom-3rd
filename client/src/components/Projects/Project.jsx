import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import ProjectForm from './ProjectForm';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleFormSubmit = async (project) => {
    try {
      if (project._id) {
        await api.put(`/projects/${project._id}`, project);
      } else {
        await api.post('/projects', project);
      }
      fetchProjects();
      setEditingProject(null);
    } catch (error) {
      console.error('Error submitting project:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ProjectForm onSubmit={handleFormSubmit} initialData={editingProject || {}} />
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            {project.details} - {project.financials.budget} USD
            <button onClick={() => setEditingProject(project)}>Edit</button>
            <button onClick={() => handleDelete(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
