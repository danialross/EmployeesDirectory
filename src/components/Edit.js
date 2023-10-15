import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const StyledForm = styled(Form.Control)`
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  width: 5rem;
`;

const ButtonWithMargin = styled(Button)`
  margin-right: 1rem;
`;

function Edit({ person, handleEditName, handleEditTitle, handleEditImage }) {
  const { name, title, img, index } = person;
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(img);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleChangeImage = (e) => {
    setNewImage(e.target.value);
  };

  const handleClickConfirm = () => {
    if (newName !== "") {
      handleEditName(index, newName);
    }

    if (newTitle !== "") {
      handleEditTitle(index, newTitle);
    }

    if (newImage !== "") {
      handleEditImage(index, newImage);
    }

    handleClose();
  };
  return (
    <div>
      <StyledButton variant="primary" onClick={handleShow}>
        Edit
      </StyledButton>

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
            <Form.Label htmlFor="name">Name</Form.Label>
            <StyledForm
              value={newName}
              onChange={handleChangeName}
              type="text"
              id="input"
            />

            <Form.Label htmlFor="title">Title</Form.Label>
            <StyledForm
              value={newTitle}
              onChange={handleChangeTitle}
              type="text"
              id="input"
            />

            <Form.Label htmlFor="url">Image Url</Form.Label>
            <StyledForm
              value={newImage}
              onChange={handleChangeImage}
              type="text"
              id="input"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonWithMargin variant="secondary" onClick={handleClose}>
            Close
          </ButtonWithMargin>
          <Button variant="primary" onClick={handleClickConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
