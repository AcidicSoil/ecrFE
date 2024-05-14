import React, { useState } from 'react';
import ItemForm from './components/ItemForm'; // Import the ItemForm component
import ServiceSearch from './components/ServiceSearch'; // Import the ServiceSearch component

function App() {
  const [calculationDetails, setCalculationDetails] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  // Function to calculate weighted sum based on the pricing and markup rules
  const calculateWeightedSum = (pairsArray) => {
    let newTotalSum = 0;
    let details = pairsArray.map(({ number, quantity }) => {
      let markedUpNumber = number < 50 ? number * 2 : number * 1.3;
      const total = markedUpNumber * quantity;
      newTotalSum += total;
      return `${number !== markedUpNumber ? `${number} marked up to ${markedUpNumber.toFixed(2)}` : number} (quantity: ${quantity}) = ${total.toFixed(2)}`;
    });

    setCalculationDetails(details);
    setTotalSum(`$${newTotalSum.toFixed(2)}`);
  };

  return (
    <div className="App">
      <div className="card">
        <h1 className="text-3xl font-semibold mb-6">Number & Quantity Sum Calculator</h1>
        <ItemForm onCalculateWeightedSum={calculateWeightedSum} />
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
