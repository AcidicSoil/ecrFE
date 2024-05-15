// File: src/App.jsx

import React, { useState } from 'react';
import ItemForm from './components/ItemForm'; // Import the ItemForm component
import ServiceSearch from './components/ServiceSearch'; // Import the ServiceSearch component
import { calculateWeightedSum } from './utils/calculations'; // Corrected import path for utility functions

function App() {
  const [calculationDetails, setCalculationDetails] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  // Function to handle calculation upon form submission
  const handleCalculateWeightedSum = (pairsArray) => {
    const result = calculateWeightedSum(pairsArray); // Using the calculateWeightedSum from utils
    setCalculationDetails(result.details);
    setTotalSum(result.totalSum);
  };

  return (
    <div className="App">
      <div className="card">
        <h1 className="text-3xl font-semibold mb-6">Number & Quantity Sum Calculator</h1>
        <ItemForm onCalculateWeightedSum={handleCalculateWeightedSum} />
        <ServiceSearch />
      </div>
      <div className="calculation-details mt-8">
        <h2 className="text-2xl font-semibold mb-4">Calculation Details:</h2>
        <p className="text-xl text-green-500 mb-4">Total Weighted Sum: {totalSum}</p>
        <div className="details-list">
          {calculationDetails.map((detail, index) => (
            <p key={index} className="text-gray-800 mb-2">{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
