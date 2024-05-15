import { useState, useEffect } from 'react';
import importedServicesData from '../services.json';  // Ensure the path is correct
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';

function ServiceSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [servicesData, setServicesData] = useState(importedServicesData);

  useEffect(() => {
    fetch('/services.json')
      .then(response => {
        if (!response.ok) { throw new Error('Network response was not ok'); }
        return response.json();
      })
      .then(data => setServicesData(data))
      .catch(error => {
        console.error('Error loading the services data:', error);
      });
  }, []);

  const handleSearch = () => {
    const regex = new RegExp(searchTerm.split('').join('.*'), 'i');
    const filteredResults = servicesData.filter(service =>
      regex.test(service.service)
    );
    setResults(filteredResults);
  };

  return (
    <Container>
      <Box>
        <TextField
          label="Search Service"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Box>
      <Box>
        {results.map((result, index) => (
          <div key={index}>
            <h2>{result.service}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </Box>
    </Container>
  );
}

export default ServiceSearch;
