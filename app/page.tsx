"use client"
import { UserButton } from "@clerk/nextjs";
import ChartTabs from "../_components/chartTabs"
import ChartContainer from '../_components/chartContainer';
import { Box, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import Filtered3DGraph from "@/_components/filter3Dgraph";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
    <UserButton/>
    <Box sx={{ display: 'flex', justifyItems:"center" ,justifyContent:"between"}} >
      <CssBaseline />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: '100%' }}
      >
        <h1 className="flex flex-row justify-center items-center">Dashboard</h1>
        <ChartTabs value={tabIndex} onChange={handleTabChange} />
        <Box sx={{ mt: 3 }}>
          <ChartContainer tabIndex={tabIndex} />
        </Box>
      </Box>
    </Box>
 
    </>
  );
}
