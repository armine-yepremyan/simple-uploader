import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/upload-file');
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>Welcome to File Uploader</Typography>
      <Button variant="contained" color="primary" onClick={handleNavigate}>
        Go to Upload Page
      </Button>
    </Container>
  );
};

export default Home;