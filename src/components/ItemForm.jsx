import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [service, setService] = useState('');
  const [time, setTime] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newService = { service, time, cost };
      await axios.post('http://localhost:5000/services', newService);
      setService('');
      setTime('');
      setCost('');
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700">Service:</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Time:</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Cost:</label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Service</button>
    </form>
  );
};

export default ItemForm;
