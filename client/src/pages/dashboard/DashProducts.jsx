import React from "react";
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { useQuery } from "react-query";
import api from "../../services/apiConfig";

const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    size: 40,
  }),
  columnHelper.accessor("name", {
    header: "Name",
    size: 120,
  }),
  columnHelper.accessor("price", {
    header: "Price",
    size: 120,
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
    size: 300,
  }),
  columnHelper.accessor("cat_name", {
    header: "Category",
  }),
  columnHelper.accessor("image_url", {
    header: "Image URL",
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const fetchProducts = async () => {
  const response = await api.get("/product"); // Replace with your actual API endpoint
  return response.data;
};

const DashProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery("products", fetchProducts);

  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(products);
    download(csvConfig)(csv);
  };

  console.log("ham lproducts ", products);
  const table = useMaterialReactTable({
    columns,
    data: products || [], // Pass the fetched data here, or an empty array while loading
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handleExportData} startIcon={<FileDownloadIcon />}>
          Export All Data
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return <MaterialReactTable table={table} />;
};

export default DashProducts;
