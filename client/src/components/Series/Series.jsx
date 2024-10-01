import React, { useState, useEffect } from 'react';
import api from '../../services/api'; // Adjust the path as needed
import SeriesForm from './SeriesForm';

const Series = () => {
    const [towers, setTowers] = useState([]); // State to hold towers
    const [series, setSeries] = useState([]); // State to hold series data
    const [editingSeries, setEditingSeries] = useState(null); // State to manage editing series

    // Fetch towers from API
    const fetchTowers = async () => {
        try {
            const response = await api.get('/towers'); // Adjust the endpoint according to your API
            setTowers(response.data); // Store towers in state
        } catch (error) {
            console.error('Error fetching towers:', error);
        }
    };

    // Fetch series from API
    const fetchSeries = async () => {
        try {
            const response = await api.get('/series'); // Adjust the endpoint according to your API
            setSeries(response.data); // Store series in state
        } catch (error) {
            console.error('Error fetching series:', error);
        }
    };

    // Handle form submission
    const handleFormSubmit = async (newSeries) => {
        try {
            if (newSeries._id) {
                // If the series already has an ID, we're updating an existing series
                await api.put(`/series/${newSeries._id}`, newSeries);
            } else {
                // If there's no ID, we're creating a new series
                await api.post('/series', newSeries);
            }
            fetchSeries(); // Refresh the list of series
            setEditingSeries(null); // Clear editing state
        } catch (error) {
            console.error('Error submitting series:', error);
        }
    };

    const handleEdit = (seriesToEdit) => {
        setEditingSeries(seriesToEdit); // Set the series to edit
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/series/${id}`); // Delete the series
            fetchSeries(); // Refresh the list of series
        } catch (error) {
            console.error('Error deleting series:', error);
        }
    };

    useEffect(() => {
        fetchTowers(); // Fetch towers on component mount
        fetchSeries(); // Fetch series on component mount
    }, []);

    return (
        <div>
            <h1>Series</h1>
            <SeriesForm 
                onSubmit={handleFormSubmit} 
                initialData={editingSeries || {}} 
                towers={towers} // Pass towers to the form
            />
            <ul>
                {series.map(seriesItem => (
                    <li key={seriesItem._id}>
                        {seriesItem.name} - Tower: {seriesItem.towerId}
                        <button onClick={() => handleEdit(seriesItem)}>Edit</button>
                        <button onClick={() => handleDelete(seriesItem._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Series;
