import React, { useState, useEffect } from "react";
import { Navbar, Form } from "react-bootstrap";

function Search({ database }) {
  const [db, setDb] = useState(database);
  let timer;

  useEffect(() => {
    setDb(database);
  }, [database, setDb]);

  const handleChange = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      const input = e.target.value;

      if (input === "") {
        setDb(database);
        return;
      }

      const filteredArray = db.filter((obj) =>
        obj.name.toLowerCase().includes(input.toLowerCase())
      );

      setDb(filteredArray);
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
