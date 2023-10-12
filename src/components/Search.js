import React from "react";
import { Navbar, Form } from "react-bootstrap";

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
    <Navbar
      className="bg-body-tertiary"
      style={{
        paddingLeft: "3rem",
        paddingRight: "3rem",
        display: "flex",
      }}
    >
      <Form inline>
        <Form.Control
          style={{
            fontFamily: "Varela Round, sans-serif",
            width: "18rem",
            marginLeft: "5rem",
            display: "flex",
            flexWrap: "wrap",
          }}
          type="text"
          placeholder="Look for Employees by Name"
          onChange={handleChange}
          onKeyDown={disableEnter}
        />
      </Form>
    </Navbar>
  );
}

export default Search;
