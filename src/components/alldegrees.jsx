import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

export default function AllDegrees() {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/degree/')
      .then(res => res.json())
      .then(data => setDegrees(data));
  }, []);

  return (
    <div>
      <Button variant="contained" component={Link} to="/degrees/create" sx={{ mb: 2 }}>
        Create New Degree
      </Button>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {degrees.map(degree => (
              <TableRow key={degree.code}>
                <TableCell>{degree.code}</TableCell>
                <TableCell>{degree.name}</TableCell>
                <TableCell>{degree.duration} years</TableCell>
                <TableCell>
                  <Button component={Link} to={`/degrees/${degree.code}`} size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}