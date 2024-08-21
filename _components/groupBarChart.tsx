// components/GroupedBarChart.tsx
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
import { FormControl, InputLabel, Select, MenuItem, Slider, Box } from '@mui/material';

// Register necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Mock data
const mockData = [
  { age: 25, amount: 100, category: 'Category1', gender: 'Male' },
  { age: 25, amount: 120, category: 'Category1', gender: 'Female' },
  { age: 30, amount: 150, category: 'Category2', gender: 'Male' },
  { age: 30, amount: 180, category: 'Category2', gender: 'Female' },
  { age: 35, amount: 200, category: 'Category3', gender: 'Male' },
  { age: 35, amount: 220, category: 'Category3', gender: 'Female' },
];

type DataPoint = {
  age: number;
  amount: number;
  category: string;
  gender: string;
};

const GroupedBarChart = () => {
  const [category, setCategory] = useState<'Category1' | 'Category2' | 'Category3' | 'All'>('All');
  const [ageRange, setAgeRange] = useState<number[]>([20, 50]);

  const filterData = (data: DataPoint[]) => {
    return data.filter((d) => {
      return (
        (category === 'All' || d.category === category) &&
        d.age >= ageRange[0] &&
        d.age <= ageRange[1]
      );
    });
  };

  const filteredData = filterData(mockData);

  // Unique labels for the x-axis
  const uniqueAges = new Set(filteredData.map(d => `Age: ${d.age}`));
  const labels = Array.from(uniqueAges);
  

  // Data for each gender
  const maleDataPoints = labels.map(label => {
    const age = Number(label.replace('Age: ', ''));
    const entry = filteredData.find(d => d.age === age && d.gender === 'Male');
    return entry ? entry.amount : 0;
  });

  const femaleDataPoints = labels.map(label => {
    const age = Number(label.replace('Age: ', ''));
    const entry = filteredData.find(d => d.age === age && d.gender === 'Female');
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
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value as 'Category1' | 'Category2' | 'Category3' | 'All')}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Category1">Category 1</MenuItem>
          <MenuItem value="Category2">Category 2</MenuItem>
          <MenuItem value="Category3">Category 3</MenuItem>
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

export default GroupedBarChart;
