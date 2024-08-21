"use client"
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { mockData, DataPoint } from '../data/mockData';
import { FormControl, InputLabel, Select, MenuItem, Slider, Box } from '@mui/material';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FilteredGraphGender = () => {
  const [gender, setGender] = useState<'Male' | 'Female' | 'All'>('All');
  const [ageRange, setAgeRange] = useState<number[]>([20, 50]);

  const filterData = (data: DataPoint[]) => {
    return data.filter((d) => {
      return (
        (gender === 'All' || d.gender === gender) &&
        d.age >= ageRange[0] &&
        d.age <= ageRange[1]
      );
    });
  };

  const filteredData = filterData(mockData);

  // Separate data by gender
  const maleData = filteredData.filter(d => d.gender === 'Male');
  const femaleData = filteredData.filter(d => d.gender === 'Female');

  // Unique labels for the x-axis
  const uniqueAges = new Set(filteredData.map(d => `Age: ${d.age}`));
  const labels = Array.from(uniqueAges);
  

  // Data for Male
  const maleDataPoints = labels.map(label => {
    const age = Number(label.replace('Age: ', ''));
    const entry = maleData.find(d => d.age === age);
    return entry ? entry.amount : 0;
  });

  // Data for Female
  const femaleDataPoints = labels.map(label => {
    const age = Number(label.replace('Age: ', ''));
    const entry = femaleData.find(d => d.age === age);
    return entry ? entry.amount : 0;
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Male',
        data: maleDataPoints,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Female',
        data: femaleDataPoints,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

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

      <Bar data={chartData} />
    </Box>
  );
};

export default FilteredGraphGender;
