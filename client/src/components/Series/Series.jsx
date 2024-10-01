import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import SeriesForm from './SeriesForm';

const Series = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [editingSeries, setEditingSeries] = useState(null);

  const fetchSeries = async () => {
    try {
      const response = await api.get('/series');
      setSeriesList(response.data);
    } catch (error) {
      console.error('Error fetching series:', error);
    }
  };

  const handleFormSubmit = async (series) => {
    try {
      if (series._id) {
        await api.put(`/series/${series._id}`, series);
      } else {
        await api.post('/series', series);
      }
      fetchSeries();
      setEditingSeries(null);
    } catch (error) {
      console.error('Error submitting series:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/series/${id}`);
      fetchSeries();
    } catch (error) {
      console.error('Error deleting series:', error);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <div>
      <h1>Series</h1>
      <SeriesForm onSubmit={handleFormSubmit} initialData={editingSeries || {}} />
      <ul>
        {seriesList.map(series => (
          <li key={series._id}>
            {series.seriesName} - {series.seriesTypology}
            <button onClick={() => setEditingSeries(series)}>Edit</button>
            <button onClick={() => handleDelete(series._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Series;
