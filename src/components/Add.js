import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Add({ handleAdd }) {
  const [show, setShow] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isTitleInvalid, setIsTitleInvalid] = useState(false);

  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPicture, setNewPicture] = useState("");

  const handleShow = () => setShow(true);
  const handleChangeName = (e) => setNewName(e.target.value);
  const handleChangeTitle = (e) => setNewTitle(e.target.value);
  const handleChangePicture = (e) => setNewPicture(e.target.value);

  const handleClose = () => {
    setNewName("");
    setNewTitle("");
    setNewPicture("");
    setShow(false);
    setIsNameInvalid(false);
    setIsTitleInvalid(false);
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

    if (newTitle === "" || newName === "") {
      return;
    }

    if (newPicture === "") {
      const noPicUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg";
      handleAdd(newName, newTitle, noPicUrl);
      handleClose();
      return;
    }

    handleAdd(newName, newTitle, newPicture);
    handleClose();
  };

  return (
    <div style={{ height: "5rem", width: "15rem" }}>
      <Button variant="primary" onClick={handleShow}>
        + Add New Employee
      </Button>

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
          <div className="mb-3">
            <Form.Label htmlFor="inputPassword5">Name</Form.Label>
            <Form.Control
              style={{ borderColor: isNameInvalid ? "red" : "" }}
              value={newName}
              onChange={handleChangeName}
              type="text"
              id="input"
            />
            {isNameInvalid ? (
              <Form.Text style={{ color: "red" }}>Required</Form.Text>
            ) : null}
          </div>

          <div className="mb-3">
            <Form.Label htmlFor="inputPassword5">Title</Form.Label>
            <Form.Control
              style={{ borderColor: isTitleInvalid ? "red" : "" }}
              value={newTitle}
              onChange={handleChangeTitle}
              type="text"
              id="input"
            />
            {isTitleInvalid ? (
              <Form.Text style={{ color: "red" }}>Required</Form.Text>
            ) : null}
          </div>

          <div className="mb-3">
            <Form.Label htmlFor="inputPassword5">
              Image URL (Optional)
            </Form.Label>
            <Form.Control
              value={newPicture}
              onChange={handleChangePicture}
              type="text"
              id="input"
            />
          </div>
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
    </div>
  );
}

export default Add;
