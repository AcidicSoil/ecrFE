import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">Service List</Link>
        </li>
        <li>
          <Link to="/add-service" className="hover:underline">Add Service</Link>
        </li>
        <li>
          <Link to="/upload-pdf" className="hover:underline">Upload PDF</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
