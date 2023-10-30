import React from "react";
import Profile from "./components/Profile";
import Add from "./components/Add";
import Banner from "./components/Banner";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Missing from "./components/Missing";

//styling
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
`;

function App() {
  //for showing the display
  const [db, setDb] = useState([]);

  const refreshDatabase = () => {
    axios
      .get("http://localhost:3001/api/employees")
      .then((response) => {
        setDb(response.data);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    refreshDatabase();
  }, []);

  return (
    <>
      <Banner>Employees</Banner>
      <Search setter={setDb} refreshDatabase={refreshDatabase} />
      <StyledDiv>
        {db.length !== 0 ? (
          db.map((person) => {
            return (
              <Profile
                key={person._id}
                person={person}
                refreshDatabase={refreshDatabase}
              />
            );
          })
        ) : (
          <Missing />
        )}
      </StyledDiv>
      <StyledDiv>
        <Add refreshDatabase={refreshDatabase} />
      </StyledDiv>
    </>
  );
}

export default App;
