// components/ChartContainer.tsx
import React from 'react';
import FilteredGraphGender from './filteredGraphGender';
import CategoryProfitChart from './categoriesProfitChart';
import Filtered3DGraph from './filter3Dgraph';
import GroupedBarChart from './groupBarChart';
import FilteredGraphCategories from './filterGraphCategory';

const chartComponents = [
  {
    label: 'Filtered Graph Gender',
    component: <FilteredGraphGender />
  },
  {
    label: 'Category Profit',
    component: <CategoryProfitChart />
  },
  {
    label: 'Filtered 3D Graph',
    component: <Filtered3DGraph />
  },
  {
    label: 'Group Bar Chart',
    component: <GroupedBarChart />
  },
  {
    label: 'Filtered Graph Categories',
    component: <FilteredGraphCategories />
  }
];

const ChartContainer = ({ tabIndex }: { tabIndex: number }) => {
  return (
    <div>
      {chartComponents[tabIndex]?.component}
    </div>
  );
};

export default ChartContainer;
