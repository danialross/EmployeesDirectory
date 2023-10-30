import React, { useState } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
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
  width: 18rem;
  margin-right: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

function Search({ setter, refreshDatabase }) {
  const [input, setInput] = useState("");

  let timer;

  const handleChange = (e) => {
    clearTimeout(timer);
    const input = e.target.value;
    setInput(input);

    timer = setTimeout(() => {
      searchDatabase(input);
    }, 300);
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
    if (input !== "") {
      setInput("");
      refreshDatabase();
    }
  };

  const disableEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <StyledNav>
      <Form>
        <StyledForm
          type="text"
          placeholder="Search by Name or Title"
          value={input}
          onChange={handleChange}
          onKeyDown={disableEnter}
        />
      </Form>
      <Button onClick={handleReset} variant="outline-primary">
        Clear
      </Button>{" "}
    </StyledNav>
  );
}

export default Search;
