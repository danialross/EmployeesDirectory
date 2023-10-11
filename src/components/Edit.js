import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Edit({ person, handleEditName, handleEditTitle }) {
  const { name, title, index } = person;
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newTitle, setNewTitle] = useState(title);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleClickConfirm = () => {
    if (newName !== "") {
      handleEditName(index, newName);
    }

    if (newTitle !== "") {
      handleEditTitle(index, newTitle);
    }

    handleClose();
  };

  console.log(name, title, index, handleEditName, handleEditTitle);

  return (
    <div>
      <Button style={{ width: "5rem" }} variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form.Label htmlFor="inputPassword5">Name</Form.Label>
            <Form.Control
              className="mb-3"
              value={newName}
              onChange={handleChangeName}
              type="text"
              id="input"
            />

            <Form.Label htmlFor="inputPassword5">Title</Form.Label>
            <Form.Control
              value={newTitle}
              onChange={handleChangeTitle}
              type="text"
              id="input"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClickConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
