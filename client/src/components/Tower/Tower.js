import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import TowerForm from './TowerForm';

const Tower = () => {
    const [towers, setTowers] = useState([]);
    const [editingTower, setEditingTower] = useState(null);
    const [developers, setDevelopers] = useState([]); // State to hold developers
    const [projects, setProjects] = useState([]); // State to hold projects

    // Fetch towers
    const fetchTowers = async () => {
        try {
            const response = await api.get('/towers');
            setTowers(response.data);
        } catch (error) {
            console.error('Error fetching towers:', error);
        }
    };

    // Fetch developers
    const fetchDevelopers = async () => {
        try {
            const response = await api.get('/developers'); // Adjust the endpoint according to your API
            setDevelopers(response.data); // Store developers in state
        } catch (error) {
            console.error('Error fetching developers:', error);
        }
    };

    // Fetch projects
    const fetchProjects = async () => {
        try {
            const response = await api.get('/projects'); // Adjust the endpoint according to your API
            setProjects(response.data); // Store projects in state
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleFormSubmit = async (tower) => {
        try {
            if (tower._id) {
                await api.put(`/towers/${tower._id}`, tower);
            } else {
                await api.post('/towers', tower);
            }
            fetchTowers();
            setEditingTower(null);
        } catch (error) {
            console.error('Error submitting tower:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/towers/${id}`);
            fetchTowers();
        } catch (error) {
            console.error('Error deleting tower:', error);
        }
    };

    useEffect(() => {
        fetchTowers();
        fetchDevelopers(); // Fetch developers on component mount
        fetchProjects(); // Fetch projects on component mount
    }, []);

    return (
        <div>
            <h1>Towers</h1>
            <TowerForm onSubmit={handleFormSubmit} initialData={editingTower || {}} developers={developers} projects={projects} /> {/* Pass developers and projects */}
            <ul>
                {towers.map(tower => (
                    <li key={tower._id}>
                        {tower.name} - {tower.totalFloors} floors
                        <button onClick={() => setEditingTower(tower)}>Edit</button>
                        <button onClick={() => handleDelete(tower._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tower;
