import React from "react";
import { useEffect } from "react";

const TableauEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h2>Tableau Report</h2>
      <div className="tableauPlaceholder" style={{ width: "800px", height: "600px" }}>
        
        <iframe
          src="https://public.tableau.com/views/Superstore_embedded_800x800/Overview"
          // src="https://public.tableau.com/views/YOUR-DASHBOARD-ID?:showVizHome=no&:embed=true"
          width="800"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default TableauEmbed;