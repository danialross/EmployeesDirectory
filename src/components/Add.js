import { useState } from "react";
import { Button, Modal, Form, Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const StyledButton = styled(Button)`
  width: 12rem;
  height: 4rem;
`;

const DivWithMargin = styled.div`
  margin-bottom: 1rem;
`;

const WarningText = styled(Form.Text)`
  color: red;
`;

function Add({ searchDatabase, currRoute }) {
  const [show, setShow] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isTitleInvalid, setIsTitleInvalid] = useState(false);
  const [isLevelInvalid, setIsLevelInvalid] = useState(false);

  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [newLevel, setNewLevel] = useState("Select Level");

  const handleShow = () => setShow(true);
  const handleChangeName = (e) => setNewName(e.target.value);
  const handleChangeTitle = (e) => setNewTitle(e.target.value);
  const handleChangePicture = (e) => setNewPicture(e.target.value);

  const levels = ["Executive", "Mid Management", "Junior"];

  const handleClose = () => {
    setNewName("");
    setNewTitle("");
    setNewPicture("");
    setNewLevel("Select Level");
    setShow(false);
    setIsNameInvalid(false);
    setIsTitleInvalid(false);
    setIsLevelInvalid(false);
  };

  const handleClick = () => {
    if (newName === "") {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }

    if (newTitle === "") {
      setIsTitleInvalid(true);
    } else {
      setIsTitleInvalid(false);
    }

    if (newLevel === "Select Level") {
      setIsLevelInvalid(true);
    } else {
      setIsLevelInvalid(false);
    }

    if (newTitle === "" || newName === "" || newLevel === "Select Level") {
      return;
    }

    const capitalizedFirst =
      newName.charAt(0).toUpperCase + newName.substring(1);
    console.log(capitalizedFirst);

    handleClose();
    sendAddRequest();
  };

  const sendAddRequest = () => {
    const newEmployee = {
      name: newName,
      title: newTitle,
      image:
        newPicture === ""
          ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
          : newPicture,
      level: newLevel,
    };

    axios
      .post("http://localhost:3001/api/employees/", newEmployee)
      .then((response) => {
        console.log("Employee has been added:", response.data);
        searchDatabase(currRoute, "");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <StyledButton variant="primary" onClick={handleShow}>
        + Add New Employee
      </StyledButton>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DivWithMargin>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              style={{
                borderColor: isNameInvalid ? "red" : "",
              }}
              value={newName}
              onChange={handleChangeName}
              type="text"
              id="input"
            />
            {isNameInvalid ? <WarningText>Required</WarningText> : null}
          </DivWithMargin>

          <DivWithMargin>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              style={{ borderColor: isTitleInvalid ? "red" : "" }}
              value={newTitle}
              onChange={handleChangeTitle}
              type="text"
              id="input"
            />
            {isTitleInvalid ? <WarningText>Required</WarningText> : null}
          </DivWithMargin>

          <DivWithMargin>
            <Form.Label htmlFor="url">Level</Form.Label>
            <DropdownButton id="dropdown-basic-button" title={newLevel}>
              {levels.map((option, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => {
                    setNewLevel(option);
                    console.log("level :" + newLevel);
                  }}
                >
                  {option}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            {isLevelInvalid ? <WarningText>Required</WarningText> : null}
          </DivWithMargin>

          <DivWithMargin>
            <Form.Label htmlFor="inputPassword5">
              Image URL (Optional)
            </Form.Label>
            <Form.Control
              value={newPicture}
              onChange={handleChangePicture}
              type="text"
              id="input"
            />
          </DivWithMargin>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
