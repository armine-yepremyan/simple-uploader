import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { Button } from '@mui/material'
import UploadFileView from './pages/UploadFile/UploadFileView'
import './App.css';
import MuiTableComponent from './MuiTableComponent';
import AgGridComponent from './AgGridComponent';
import TableauEmbed from './TableauEmbed';
import Home from './pages/Home/Home';

function App() {
  const [path, setPath] = useState('')
  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    
  }

  return (
    <Router>
      {/* <nav>
        <ul>
          <li><Button><Link to="/upload-file" onClick={() => setPath('/upload-file')}>React Table</Link></Button></li>
        </ul>
      </nav> */}
      <React.Profiler id="UploadFile" onRender={onRender}>
        <Routes>
            <Route path="/upload-file" element={<UploadFileView />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/mui-table" element={<MuiTableComponent />} />
            <Route path="/ag-grid" element={<AgGridComponent />} />
            <Route path="/tableau" element={<TableauEmbed />} /> */}
        </Routes>
      </React.Profiler>
    </Router>
  );
}

export default App;

