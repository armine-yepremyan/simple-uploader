
import React, { useState } from "react";

import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { data } from './data'
ModuleRegistry.registerModules([AllCommunityModule]);

// Create new GridExample component
const AgGridComponent = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(data);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div style={{ width: "100%", height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};


export default AgGridComponent;