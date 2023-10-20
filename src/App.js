import React from "react";
import Profile from "./components/Profile";
import Add from "./components/Add";
import Banner from "./components/Banner";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import styled from "styled-components";

//styling
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
`;

function App() {
  //for showing the display
  const [db, setDb] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((response) => response.json())
      .then((data) => setDb(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(db);

  //uneffected by searching to allow the changing of db then use originalDb to revert back
  const [originalDb, setOriginalDb] = useState(db);

  const handleEditName = (id, newName) => {
    const updatedPeople = db.map((person) => {
      if (person.index === id) {
        return { ...person, name: newName };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleEditTitle = (id, newTitle) => {
    const updatedPeople = db.map((person) => {
      if (person.index === id) {
        return { ...person, title: newTitle };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleEditImage = (id, newImage) => {
    const updatedPeople = db.map((person) => {
      if (person.index === id) {
        return { ...person, img: newImage };
      }
      return person; // Return unmodified objects
    });

    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleDelete = (id) => {
    const updatedPeople = db.filter((item) => item.index !== id);
    setDb(updatedPeople);
    setOriginalDb(updatedPeople);
  };

  const handleAdd = (name, title, img) => {
    const newEmployee = {
      name: name,
      title: title,
      img: img,
      index: db.length,
    };

    setDb([...db, newEmployee]);
    setOriginalDb([...db, newEmployee]);
  };

  return (
    <>
      <Banner>Employees</Banner>
      <Search originalDb={originalDb} setter={setDb} />
      <StyledDiv>
        {db !== null
          ? db.map((person) => {
              return (
                <Profile
                  key={person.index}
                  person={person}
                  handleDelete={handleDelete}
                  handleEditName={handleEditName}
                  handleEditTitle={handleEditTitle}
                  handleEditImage={handleEditImage}
                />
              );
            })
          : null}
      </StyledDiv>
      <StyledDiv>
        <Add handleAdd={handleAdd}></Add>
      </StyledDiv>
    </>
  );
}

export default App;
