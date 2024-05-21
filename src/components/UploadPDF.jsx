import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UploadPDF = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/pdf/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      toast.success('File uploaded and data extracted successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Work Order PDF</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="file" onChange={handleFileChange} className="mb-2 p-2 border border-gray-300 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload</button>
      </form>
    </div>
  );
};

export default UploadPDF;
