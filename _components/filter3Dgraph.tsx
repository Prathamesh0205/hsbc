"use client"
import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { mockData, DataPoint } from '../data/mockData2';
import { FormControl, InputLabel, Select, MenuItem, Slider, Box } from '@mui/material';

const Filtered3DGraph = () => {
  const [gender, setGender] = useState<'Male' | 'Female' | 'All'>('All');
  const [ageRange, setAgeRange] = useState<number[]>([20, 50]);
  const [category, setCategory] = useState<'A' | 'B' | 'C' | 'All'>('All');

  const filterData = (data: DataPoint[]) => {
    return data.filter((d) => {
      return (
        (gender === 'All' || d.gender === gender) &&
        (category === 'All' || d.category === category) &&
        d.age >= ageRange[0] &&
        d.age <= ageRange[1]
      );
    });
  };

  const filteredData = filterData(mockData);

  const x = filteredData.map((d) => d.age);
  const y = filteredData.map((d) => d.amount);
  const z = filteredData.map((d) => d.category === 'A' ? 1 : d.category === 'B' ? 2 : 3);

  return (
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select
          labelId="gender-select-label"
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value as 'Male' | 'Female' | 'All')}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <InputLabel id="age-range-slider">Age Range</InputLabel>
        <Slider
          value={ageRange}
          onChange={(e, newValue) => setAgeRange(newValue as number[])}
          valueLabelDisplay="auto"
          min={20}
          max={50}
          step={5}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value as 'A' | 'B' | 'C' | 'All')}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
        </Select>
      </FormControl>

      <Plot
        data={[
          {
            x,
            y,
            z,
            type: 'scatter3d',
            mode: 'markers',
            marker: { size: 12, color: z, colorscale: 'Viridis' },
          },
        ]}
        layout={{ width: 700, height: 500, title: '3D Scatter Plot' }}
      />
    </Box>
  );
};

export default Filtered3DGraph;
