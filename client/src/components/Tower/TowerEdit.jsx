import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TowerForm from './TowerForm';

const TowerEdit = ({ match }) => {
    const [towerData, setTowerData] = useState(null);
    const [developers, setDevelopers] = useState([]); // Initialize as an empty array

    // Fetch developers for selection
    useEffect(() => {
        const fetchDevelopers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/developers');
                setDevelopers(response.data);
            } catch (error) {
                console.error('Error fetching developers:', error);
            }
        };

        fetchDevelopers();
    }, []);

    // Fetch tower data to prefill the form
    useEffect(() => {
        const fetchTower = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/towers/${match.params.id}`);
                setTowerData(response.data);
            } catch (error) {
                console.error('Error fetching tower:', error);
            }
        };

        fetchTower();
    }, [match.params.id]);

    // Handle form submission
    const handleEditTower = async (updatedTower) => {
        try {
            await axios.put(`http://localhost:5000/api/towers/${match.params.id}`, updatedTower);
            alert('Tower updated successfully!');
        } catch (error) {
            console.error('Error updating tower:', error);
            alert('Failed to update tower');
        }
    };

    return (
        <div>
            <h2>Edit Tower</h2>
            {towerData && (
                <TowerForm onSubmit={handleEditTower} initialData={towerData} developers={developers} />
            )}
        </div>
    );
};

export default TowerEdit;
