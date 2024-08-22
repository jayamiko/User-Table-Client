import Modal from "react-bootstrap/Modal";
import Button from "../Button/Button";

function CModal({ title, show, setShow, children, onSubmit }) {
  function handleClose() {
    setShow(false);
  }

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button text="Submit" color="blue" onClick={onSubmit}>
          SUBMIT
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CModal;
