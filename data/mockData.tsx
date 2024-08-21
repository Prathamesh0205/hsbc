export interface DataPoint {
    gender: 'Male' | 'Female';
    age: number;
    amount: number;
  }
  
  export const mockData: DataPoint[] = [
    { gender: 'Male', age: 25, amount: 200 },
    { gender: 'Female', age: 30, amount: 150 },
    { gender: 'Male', age: 35, amount: 250 },
    { gender: 'Female', age: 28, amount: 300 },
    { gender: 'Male', age: 40, amount: 400 },
    { gender: 'Female', age: 22, amount: 180 },
    { gender: 'Male', age: 30, amount: 220 },
    { gender: 'Female', age: 45, amount: 330 },
  ];
  