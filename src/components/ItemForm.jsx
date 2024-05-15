import { useState } from 'react';
import PropTypes from 'prop-types';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Container } from '@mui/material';

function ItemForm({ services, onCalculateWeightedSum }) {
  const [items, setItems] = useState([{ serviceId: '', quantity: 1, cost: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { serviceId: '', quantity: 1, cost: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleChange = (index, field, value) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'serviceId') {
          const service = services.find(service => service.id === value);
          updatedItem.cost = service ? service.cost : 0;
        }
        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculateWeightedSum(items);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {items.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Select
              value={item.serviceId}
              onChange={(e) => handleChange(index, 'serviceId', e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ mr: 1, minWidth: 120 }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {services.map((service) => (
                <MenuItem key={service.id} value={service.id}>{service.name}</MenuItem>
              ))}
            </Select>
            <TextField
              label="Quantity"
              type="number"
              value={item.quantity}
              onChange={(e) => handleChange(index, 'quantity', e.target.value)}
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
            />
            <TextField
              label="Cost"
              type="text"
              value={item.cost}
              InputProps={{ readOnly: true }}
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
            />
            <IconButton onClick={() => handleRemoveItem(index)} color="error">
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddItem}
          sx={{ mb: 2 }}
        >
          Add Item
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Calculate
        </Button>
      </Box>
    </Container>
  );
}

ItemForm.propTypes = {
  services: PropTypes.array.isRequired,
  onCalculateWeightedSum: PropTypes.func.isRequired,
};

export default ItemForm;
