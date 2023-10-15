import React from "react";
import { Navbar, Form } from "react-bootstrap";
import styled from "styled-components";

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

function Search({ originalDb, setter }) {
  let timer;

  const handleChange = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      const input = e.target.value;

      if (input === "") {
        setter(originalDb);
        return;
      }

      const filteredArray = originalDb.filter((obj) =>
        obj.name.toLowerCase().includes(input.toLowerCase())
      );

      setter(filteredArray);
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
          placeholder="Search by Name"
          onChange={handleChange}
          onKeyDown={disableEnter}
        />
      </Form>
    </StyledNav>
  );
}

export default Search;
