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
import { mockData, DataPoint } from '../data/mockData2';
import { FormControl, InputLabel, Select, MenuItem, Slider, Box } from '@mui/material';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
type Category = 'A' | 'B' | 'C' | 'All';

const FilteredGraphCategories = () => {
    const [category, setCategory] = useState<Category>('All');
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

  // Separate data by category
  const category1Data = filteredData.filter(d => d.category === 'A');
  const category2Data = filteredData.filter(d => d.category === 'B');
  const category3Data = filteredData.filter(d => d.category === 'C');

  // Unique labels for the x-axis
  const uniqueAges = new Set(filteredData.map(d => `Age: ${d.age}`));
const labels = Array.from(uniqueAges);

  // Data for each category
  const category1DataPoints = labels.map(label => {
    const age = Number(label.replace('Age: ', ''));
    const entry = category1Data.find(d => d.age === age);
    return entry ? entry.amount : 0;
  });

  const category2DataPoints = labels.map(label => {
    const age = Number(label.replace('Age: ', ''));
    const entry = category2Data.find(d => d.age === age);
    return entry ? entry.amount : 0;
  });

  const category3DataPoints = labels.map(label => {
    const age = Number(label.replace('Age: ', ''));
    const entry = category3Data.find(d => d.age === age);
    return entry ? entry.amount : 0;
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Category 1',
        data: category1DataPoints,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Category 2',
        data: category2DataPoints,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Category 3',
        data: category3DataPoints,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
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
          onChange={(e) => setCategory(e.target.value as Category)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Category1">es_transportation</MenuItem>
          <MenuItem value="Category2">es_food</MenuItem>
          <MenuItem value="Category3">es_health</MenuItem>
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

export default FilteredGraphCategories;
