import React, { useState, useEffect } from 'react';

const TowerForm = ({ onSubmit, initialData = {}, developers }) => {
    const [tower, setTower] = useState({
        name: '',
        location: '',
        totalFloors: 0,
        totalUnits: 0,
        developerId: '',
        projectId: '',
        ...initialData
    });

    useEffect(() => {
        if (initialData) {
            setTower(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        setTower({ ...tower, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(tower); // Pass the tower object to the parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={tower.name} onChange={handleChange} placeholder="Tower Name" required />
            <input type="text" name="location" value={tower.location} onChange={handleChange} placeholder="Location" required />
            <input type="number" name="totalFloors" value={tower.totalFloors} onChange={handleChange} placeholder="Total Floors" required />
            <input type="number" name="totalUnits" value={tower.totalUnits} onChange={handleChange} placeholder="Total Units" required />
            
            {/* Developer selection dropdown */}
            <select name="developerId" value={tower.developerId} onChange={handleChange} required>
                <option value="">Select Developer</option>
                {Array.isArray(developers) && developers.map(dev => (
                    <option key={dev._id} value={dev._id}>{dev.name}</option>
                ))}
            </select>

            <input type="text" name="projectId" value={tower.projectId} onChange={handleChange} placeholder="Project ID" required />

            <button type="submit">Submit</button>
        </form>
    );
};

export default TowerForm;
