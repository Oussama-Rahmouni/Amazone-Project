import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../homeData";

const DashUsers = () => {
  return (
    <div
      style={{
        margin: "40px",
        height: 578,
        width: "90%",
      }}
    >
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
      />
    </div>
  );
};

export default DashUsers;
