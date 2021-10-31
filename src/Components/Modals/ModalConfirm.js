import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalConfirm = ({ handleOrderDelete, show, handleClose, orderId }) => {
  /*
<---------------------------- Confirm Modal Sending Id to Delete From Database ---------------------------->
*/
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">Cancel Booking!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to cancel order?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleOrderDelete(orderId)}>
          Cancel Order
        </Button>
        <Button variant="dark" onClick={handleClose}>
          Dont Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
