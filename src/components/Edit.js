import { useState } from "react";
import { Button, Modal, Form, Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const StyledForm = styled(Form.Control)`
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  width: 5rem;
`;

const ButtonWithMargin = styled(Button)`
  margin-right: 1rem;
`;

function Edit({ person, searchDatabase, currRoute }) {
  const { name, title, image, level, _id } = person;
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newLevel, setNewLevel] = useState(level);

  const levels = ["Executive", "Mid Management", "Junior"];

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

  const sendChangeRequest = () => {
    const changedPerson = {
      _id: _id,
      name: newName,
      title: newTitle,
      image: newImage,
      level: newLevel,
    };

    axios
      .put("http://localhost:3001/api/employees/" + _id, changedPerson)
      .then(() => {
        console.log("User successfully updated");
        searchDatabase(currRoute, "");
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleClickConfirm = () => {
    if (newName === "") {
      return;
    }

    if (newTitle === "") {
      return;
    }

    if (newImage === "") {
      return;
    }

    sendChangeRequest();
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

            <Form.Label htmlFor="url">Level</Form.Label>
            <DropdownButton id="dropdown-basic-button" title={newLevel}>
              {levels.map((option, index) => (
                <Dropdown.Item key={index} onClick={() => setNewLevel(option)}>
                  {option}
                </Dropdown.Item>
              ))}
            </DropdownButton>
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
