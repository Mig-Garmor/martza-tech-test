import "./App.css";
import React, { useState, useEffect } from "react";
import ProductTable from "./components/table/ProductTable";
import Search from "./components/Search";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "./components/Modal";
import {
  getProductById,
  getProducts,
  getUserAuth,
  getProductCategories,
} from "./services/services";
import Select from "./components/Select";

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [text, setText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getUserAuth();
    getData();
    fetchProductCategories();
  }, []);

  useEffect(() => {
    getData();
  }, [page, rowsPerPage]);

  const getData = async () => {
    let skipNumber = page * rowsPerPage;
    const result = await getProducts(rowsPerPage, skipNumber);
    setData(result);
  };

  const fetchProductCategories = async () => {
    const result = await getProductCategories();
    setCategories(result);
  };

  const handleOpen = async (title) => {
    const data = await getOneProduct(title);
    setModalData(data);
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  const getOneProduct = async (id) => {
    const result = await getProductById(id);
    return result;
  };

  return (
    <div className="App">
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          paddingY: "10px",
          paddingX: "10px",
        }}
      >
        <Box>
          <Search text={text} setText={setText} setData={setData} />
          <Select setData={setData} categories={categories} getData={getData} />
        </Box>

        <ProductTable
          data={data}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          handleOpen={handleOpen}
        />
        <Modal
          openModal={openModal}
          handleClose={handleClose}
          modalData={modalData}
        />
      </Paper>
    </div>
  );
}

export default App;
