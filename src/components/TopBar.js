import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  CloseButton,
  Button,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  width: 23rem;
  margin-right: -1.7rem;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  margin-right: auto;
  margin-left: 0;
`;

const StyledCloseButton = styled(CloseButton)`
  margin-right: 1rem;
`;

const StyledButton = styled(Button)`
  margin-right: 0.5rem;
`;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  margin-right: 1rem;
  color: black;
  text-decoration: none;
  transition: border-radius ease;
  padding: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 1rem;
  }

  &.active {
    background-color: #f0f0f0;
    border-radius: 1rem;
  }
`;

function TopBar({ routes, currRoute, searchDatabase }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput("");
  };

  const enterPressed = (e) => {
    if (e.key === "Enter") {
      searchDatabase(currRoute, input);
    }
  };

  const resetSearch = (path, currPath, isFromLink) => {
    if (isFromLink === true) {
      if (path !== currPath) {
        searchDatabase(path, "");
        setInput("");
      }
    } else {
      if (input.length !== 0) {
        searchDatabase(path, "");
        setInput("");
      }
    }
  };

  return (
    <StyledNav>
      <StyledContainer>
        <Nav>
          <StyledLink
            to={routes[0].path}
            onClick={() => {
              resetSearch(routes[0].path, currRoute, true);
            }}
            exact
          >
            {routes[0].title}
          </StyledLink>
          <StyledLink
            to={routes[1].path}
            onClick={() => {
              resetSearch(routes[1].path, currRoute, true);
            }}
          >
            {routes[1].title}
          </StyledLink>
          <StyledLink
            to={routes[2].path}
            onClick={() => {
              resetSearch(routes[2].path, currRoute, true);
            }}
          >
            {routes[2].title}
          </StyledLink>
          <StyledLink
            to={routes[3].path}
            onClick={() => {
              resetSearch(routes[3].path, currRoute, true);
            }}
          >
            {routes[3].title}
          </StyledLink>
        </Nav>
      </StyledContainer>

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
          searchDatabase(currRoute, input);
        }}
        variant="primary"
      >
        Search
      </StyledButton>
      <Button
        onClick={() => {
          resetSearch(currRoute, currRoute, false);
        }}
        variant="secondary"
      >
        Reset
      </Button>
    </StyledNav>
  );
}

export default TopBar;
