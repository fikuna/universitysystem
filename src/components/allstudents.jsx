import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Card, CardContent } from '@mui/material';
import { useNavigate } from "react-router-dom";

function AllStudents() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setError('');
  };

  const validateAndSearch = async () => {
    if (!input.trim()) {
      setError('Input cannot be blank.');
      return;
    }

    if (!/^\d{8}$/.test(input)) {
      setError('Input must be numeric and exactly 8 characters.');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/${input}`);
      
      if (!response.ok) {
        setError('Student ID does not exist.');
        return;
      }
      
      navigate(`/students/${input}`);
    } catch (error) {
      setError('Error validating student ID.');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ 
          border: "5px solid turquoise", 
          borderRadius: "50px", 
          padding: "10px", 
          margin: "5vh auto", 
          maxWidth: "75vw", 
          textAlign: "center"
        }}
      >
        Student Search
      </Typography>
      
      <Card sx={{ mt: 4, border: "2px solid turquoise", borderRadius: "15px" }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <TextField
              error={!!error}
              helperText={error}
              label="Student's ID Number"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
              fullWidth
              sx={{ maxWidth: 400 }}
            />
            <Button 
              variant="contained" 
              onClick={validateAndSearch}
              size="large"
              sx={{ mt: 2 }}
            >
              Search
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AllStudents;
