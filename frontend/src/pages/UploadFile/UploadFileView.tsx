import React, { useState } from "react";
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Container, Typography } from "@mui/material";
// import * as dotenv from 'dotenv';
// dotenv.config();

const UploadFileView = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (event: any): Promise<void> => {
    if (!file) {
      throw new Error("Function not implemented.");
    }
    const formData = new FormData();
    formData.append('file', file);
    await axios.post(`http://localhost:5000/upload`, formData);    
  }

  return (
    <>
      <Container style={{ textAlign: 'center', marginTop: '100px' }}>
        <Typography variant="h5" gutterBottom>Select a file to upload</Typography>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          // tabIndex={-1}
          color="secondary"
          size="medium"
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <input style={{
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            overflow: 'hidden',
            position: 'absolute',
          }}
          type="file"
          onChange={e => setFile(e.target.files?.[0] || null)}
          />
        </Button>
        <br /><br />
        <Button variant="contained" color="primary" size="large" onClick={handleUpload}>
          Upload to S3
        </Button>
      </Container>

    </>
  )
}

export default UploadFileView