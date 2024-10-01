import React, { useState } from 'react';

const SeriesForm = ({ onSubmit, initialData = {} }) => {
  const [series, setSeries] = useState({
    towerId: '',
    seriesName: '',
    seriesTypology: '',
    bed: 0,
    dimension: '',
    bath: 0,
    direction: '',
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSeries({ ...series, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(series);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="seriesName" value={series.seriesName} onChange={handleChange} placeholder="Series Name" required />
      <input type="text" name="seriesTypology" value={series.seriesTypology} onChange={handleChange} placeholder="Series Typology" />
      <input type="number" name="bed" value={series.bed} onChange={handleChange} placeholder="Beds" />
      <input type="text" name="dimension" value={series.dimension} onChange={handleChange} placeholder="Dimension" />
      <input type="number" name="bath" value={series.bath} onChange={handleChange} placeholder="Baths" />
      <input type="text" name="direction" value={series.direction} onChange={handleChange} placeholder="Direction" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SeriesForm;
