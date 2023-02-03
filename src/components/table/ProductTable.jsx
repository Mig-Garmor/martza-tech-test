import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { columns } from "./tableProps";

export default function StickyHeadTable({
  data,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  handleOpen,
}) {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    createRows();
  }, [data]);

  const createData = (title, brand, price, rating, stock, id) => {
    return { title, brand, price, rating, stock, id };
  };

  const createRows = () => {
    if (data !== null) {
      const rowsHolder = data.products.map((product) => {
        return createData(
          product.title,
          product.brand,
          product.price,
          product.rating,
          product.stock,
          product.id
        );
      });
      setRows(rowsHolder);
    } else console.log("Updating rows. Waiting for data...");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <TableContainer>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ border: "1px solid black" }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length > 0 ? (
              rows.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => handleOpen(row.id)}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow className="padding bigBoldText">
                <TableCell>No results</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data?.total === undefined ? 0 : data.total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
