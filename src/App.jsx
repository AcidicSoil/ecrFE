// /src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemForm from './components/ItemForm';
import ServiceList from './components/ServiceList';
import UploadPDF from './components/UploadPDF';
import Navigation from './components/Navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://localhost:3001";

const App = () => {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', data => {
      toast.info("Real-time update: " + data.data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <Router>
      <div>
        <h1>AyaNova Clone</h1>
        <Navigation />
        <ToastContainer />
        <Routes>
          <Route path="/add-service" element={<ItemForm />} />
          <Route path="/upload-pdf" element={<UploadPDF />} />
          <Route path="/" element={<ServiceList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
