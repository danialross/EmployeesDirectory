import React from "react";
import { Navbar, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const StyledNav = styled(Navbar)`
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  background: white;
`;

const StyledForm = styled(Form.Control)`
  font-family:
    Varela Round,
    sans-serif;
  width: 18rem;
  margin-left: 5rem;
  display: flex;
  flex-wrap: wrap;
`;

function Search({ setter, refreshDatabase }) {
  let timer;

  const handleChange = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      const input = e.target.value;

      const searchDatabase = (input) => {
        if (input === "") {
          refreshDatabase();
        } else {
          axios
            .get("http://localhost:3001/api/search/" + input)
            .then((response) => {
              console.log(response.data);

              setter(response.data);
            })
            .catch((error) => console.error("Error:", error));
        }
      };

      searchDatabase(input);
    }, 300);
  };

  const disableEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <StyledNav>
      <Form inline>
        <StyledForm
          type="text"
          placeholder="Search by Name or Title"
          onChange={handleChange}
          onKeyDown={disableEnter}
        />
      </Form>
    </StyledNav>
  );
}

export default Search;
