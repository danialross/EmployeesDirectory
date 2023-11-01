import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  CloseButton,
  Button,
  Container,
} from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const StyledNav = styled(Navbar)`
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  background: white;
  justify-content: flex-end;
`;

const StyledForm = styled(Form.Control)`
  font-family:
    Varela Round,
    sans-serif;
  width: 16rem;
  margin-right: -2rem;
  display: flex;
  align-items: center;
`;

const StyledCloseButton = styled(CloseButton)`
  margin-right: 1rem;
`;

const StyledButton = styled(Button)`
  margin-right: 0.5rem;
`;

function TopBar({ setter, refreshDatabase }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const searchDatabase = (input) => {
    if (input === "") {
      refreshDatabase();
    } else {
      axios
        .get("http://localhost:3001/api/search/" + input)
        .then((response) => {
          console.log("search result : " + response.data);
          setter(response.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const handleReset = () => {
    handleClear();
    refreshDatabase();
  };

  const handleClear = () => {
    setInput("");
  };

  const enterPressed = (e) => {
    if (e.key === "Enter") {
      searchDatabase(input);
    }
  };

  return (
    <StyledNav>
      {/* <Container>
        <Nav.Brand href="#">All Employees</Nav.Brand>
        <Nav>
          <Nav.Link href="#">Executives</Nav.Link>
          <Nav.Link href="#">Mid </Nav.Link>
          <Nav.Link href="#">Juniors</Nav.Link>
        </Nav>
      </Container> */}
      <StyledForm
        type="text"
        placeholder="Search by Name or Title"
        value={input}
        onChange={handleChange}
        onKeyDown={enterPressed}
      />
      <StyledCloseButton onClick={handleClear} />
      <StyledButton
        onClick={() => {
          searchDatabase(input);
        }}
        variant="primary"
      >
        Search
      </StyledButton>
      <Button onClick={handleReset} variant="secondary">
        Reset
      </Button>
    </StyledNav>
  );
}

export default TopBar;
