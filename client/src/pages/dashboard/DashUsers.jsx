import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../homeData";
import { useNavigate } from "react-router-dom";

const DashUsers = () => {
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    // Navigate to the user details page, using the user's id or other identifier
    navigate(`${params.id}`);
  };

  return (
    <div style={{ margin: "40px", height: 578, width: "90%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={handleRowClick} // Add the row click handler here
      />
    </div>
  );
};

export default DashUsers;
