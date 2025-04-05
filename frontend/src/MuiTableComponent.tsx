import React, { useEffect } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from "@mui/material";

import { data } from './data'

const MuiTableComponent = () => {
  useEffect(() => console.log('USEEFFECT'))

  return (
    <TableContainer style={{ height: 700}} component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Electric</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.make}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.electric ? 'x' : '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTableComponent;
