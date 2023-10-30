import React from "react";
import Profile from "./components/Profile";
import Add from "./components/Add";
import Banner from "./components/Banner";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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
  //uneffected by searching to allow the changing of db then use originalDb to revert back
  const [originalDb, setOriginalDb] = useState(db);

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
      <Search originalDb={originalDb} setter={setDb} />
      <StyledDiv>
        {db !== null
          ? db.map((person) => {
              return (
                <Profile
                  key={person._id}
                  person={person}
                  refreshDatabase={refreshDatabase}
                />
              );
            })
          : null}
      </StyledDiv>
      <StyledDiv>
        <Add refreshDatabase={refreshDatabase} />
      </StyledDiv>
    </>
  );
}

export default App;
