import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import DeveloperForm from './DeveloperForm';
import "./developer.css";
const Developer = () => {
  const [developers, setDevelopers] = useState([]);
  const [editingDeveloper, setEditingDeveloper] = useState(null);

  // Fetch developers
  const fetchDevelopers = async () => {
    try {
      const response = await api.get('/developers');
      setDevelopers(response.data);
    } catch (error) {
      console.error('Error fetching developers:', error);
    }
  };

  // Create or Update Developer
  const handleFormSubmit = async (developer) => {
    try {
      if (developer._id) {
        await api.put(`/developers/${developer._id}`, developer);
      } else {
        await api.post('/developers', developer);
      }
      fetchDevelopers();
      setEditingDeveloper(null);
    } catch (error) {
      console.error('Error saving developer:', error);
    }
  };

  // Delete Developer
  const handleDelete = async (id) => {
    try {
      await api.delete(`/developers/${id}`);
      fetchDevelopers();
    } catch (error) {
      console.error('Error deleting developer:', error);
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return (
    <div>
      <h1>Developers</h1>
      <DeveloperForm onSubmit={handleFormSubmit} initialData={editingDeveloper || {}} />
      <ul>
        {developers.map(dev => (
          <li key={dev._id}>
            {dev.name} - {dev.website}
            <button onClick={() => setEditingDeveloper(dev)}>Edit</button>
            <button onClick={() => handleDelete(dev._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Developer;
