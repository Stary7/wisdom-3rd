import React, { useState, useEffect } from 'react';
import DeveloperForm from './DeveloperForm';
import axios from 'axios';

const DeveloperEdit = ({ match }) => {
    const [developerData, setDeveloperData] = useState(null);

    // Fetch developer data to prefill the form
    useEffect(() => {
        const fetchDeveloper = async () => {
            const response = await axios.get(`http://localhost:5000/api/developers/${match.params.id}`);
            setDeveloperData(response.data);
        };

        fetchDeveloper();
    }, [match.params.id]);

    // Handle form submission
    const handleEditDeveloper = async (updatedDeveloper) => {
        try {
            await axios.put(`http://localhost:5000/api/developers/${match.params.id}`, updatedDeveloper);
            alert('Developer updated successfully!');
        } catch (error) {
            console.error('Error updating developer:', error);
            alert('Failed to update developer');
        }
    };

    return (
        <div>
            <h2>Edit Developer</h2>
            {developerData && (
                <DeveloperForm onSubmit={handleEditDeveloper} initialData={developerData} />
            )}
        </div>
    );
};

export default DeveloperEdit;
