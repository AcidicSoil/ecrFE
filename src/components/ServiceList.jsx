// /src/components/ServiceList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://localhost:3001";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch initial data using Axios
    axios.get(`${ENDPOINT}/api/services`)
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));

    // Set up Socket.io connection for real-time updates
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', data => {
      // Handle real-time update, e.g., update state with new data
      setServices(prevServices => [...prevServices, data]);
    });

    return () => socket.disconnect();
  }, []);

  const filteredServices = services.filter(service =>
    service.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Service List</h1>
      <input
        type="text"
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <ul className="list-disc pl-5">
        {filteredServices.map(service => (
          <li key={service._id} className="mb-2">
            {service.service} - {service.time} - ${service.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
