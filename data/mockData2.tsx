export interface DataPoint {
    gender: 'Male' | 'Female';
    age: number;
    amount: number;
    category: 'A' | 'B' | 'C';
  }
  
  export const mockData: DataPoint[] = [
    { gender: 'Male', age: 25, amount: 200, category: 'A' },
    { gender: 'Female', age: 30, amount: 150, category: 'B' },
    { gender: 'Male', age: 35, amount: 250, category: 'A' },
    { gender: 'Female', age: 28, amount: 300, category: 'C' },
    { gender: 'Male', age: 40, amount: 400, category: 'B' },
    { gender: 'Female', age: 22, amount: 180, category: 'A' },
    { gender: 'Male', age: 30, amount: 220, category: 'C' },
    { gender: 'Female', age: 45, amount: 330, category: 'B' },
  ];
  