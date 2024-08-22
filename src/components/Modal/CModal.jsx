import Modal from "react-bootstrap/Modal";

function CModal({ title, show, setShow, children }) {
  function handleClose() {
    setShow(false);
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default CModal;
