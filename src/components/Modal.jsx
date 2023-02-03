import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function BasicModal({ openModal, handleClose, modalData }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox">
          {console.log("modalData: ", modalData)}
          <h3>{modalData.title}</h3>
          <p>{modalData.description}</p>
          <img src={modalData.thumbnail} alt="" />
          <p>Price: {modalData.price} euros</p>
          <p>Rating: {modalData.rating}</p>
          <p>Available units: {modalData.stock}</p>
        </Box>
      </Modal>
    </div>
  );
}
