// components/CategoryProfitChart.tsx
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
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

// Register necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Mock data
const mockData = [
  { category: 'es_transportation', merchant: 'Merchant1', profit: 1200 },
  { category: 'es_food', merchant: 'Merchant2', profit: 1500 },
  { category: 'es_health', merchant: 'Merchant1', profit: 800 },
  { category: 'es_transportation', merchant: 'Merchant2', profit: 950 },
  { category: 'es_transportation', merchant: 'Merchant1', profit: 600 },
  { category: 'es_heatlh', merchant: 'Merchant2', profit: 700 },
];

type DataPoint = {
  category: string;
  merchant: string;
  profit: number;
};

const CategoryProfitChart = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'es_transportation' | 'es_food' | 'es_health'>('All');

  const filterData = (data: DataPoint[]) => {
    return data.filter(d => selectedCategory === 'All' || d.category === selectedCategory);
  };

  const filteredData = filterData(mockData);

  // Separate data by merchant
  const merchant1Data = filteredData.filter(d => d.merchant === 'Merchant1');
  const merchant2Data = filteredData.filter(d => d.merchant === 'Merchant2');

  // Unique labels for the x-axis
  const uniqueCategories = new Set(filteredData.map(d => d.category));
  const labels = Array.from(uniqueCategories);
  
  // Data for each merchant
  const merchant1DataPoints = labels.map(label => {
    const entry = merchant1Data.find(d => d.category === label);
    return entry ? entry.profit : 0;
  });

  const merchant2DataPoints = labels.map(label => {
    const entry = merchant2Data.find(d => d.category === label);
    return entry ? entry.profit : 0;
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Merchant 1',
        data: merchant1DataPoints,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Merchant 2',
        data: merchant2DataPoints,
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
          value={selectedCategory}
          label="Category"
          onChange={(e) => setSelectedCategory(e.target.value as 'All' | 'es_transportation' | 'es_food' | 'es_health')}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="es_transportation">es_transportation</MenuItem>
          <MenuItem value="es_food">es_food</MenuItem>
          <MenuItem value="es_health">es_health</MenuItem>
        </Select>
      </FormControl>

      <Bar data={chartData} />
    </Box>
  );
};

export default CategoryProfitChart;
