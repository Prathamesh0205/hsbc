// components/ChartTabs.tsx
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

type ChartTabsProps = {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const ChartTabs = ({ value, onChange }: ChartTabsProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={onChange} aria-label="chart tabs">
        <Tab label="Filtered Graph Gender" />
        <Tab label="Category Profit" />
        <Tab label="Filtered 3D graph"/>
        <Tab label="Group Bar Graph"/>
        <Tab label="Filtered Graph Categories"/>
      </Tabs>
    </Box>
  );
};

export default ChartTabs;
