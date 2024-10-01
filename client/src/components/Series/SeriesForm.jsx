import React, { useState, useEffect } from 'react';

const SeriesForm = ({ onSubmit, initialData = {}, towers }) => {
    const [series, setSeries] = useState({
        name: '',
        towerId: '', // Field to hold the selected tower ID
        // Add any other fields needed for the series
        ...initialData
    });

    useEffect(() => {
        if (initialData) {
            setSeries(initialData); // Populate form with existing data if editing
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSeries({ ...series, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(series); // Pass the series object to the parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{initialData._id ? 'Edit Series' : 'Create Series'}</h2>
            <input
                type="text"
                name="name"
                value={series.name}
                onChange={handleChange}
                placeholder="Series Name"
                required
            />

            {/* Tower selection dropdown */}
            <select
                name="towerId"
                value={series.towerId}
                onChange={handleChange}
                required
            >
                <option value="">Select Tower</option>
                {Array.isArray(towers) && towers.map(tower => (
                    <option key={tower._id} value={tower._id}>{tower.name}</option>
                ))}
            </select>

            <button type="submit">{initialData._id ? 'Update' : 'Submit'}</button>
        </form>
    );
};

export default SeriesForm;
