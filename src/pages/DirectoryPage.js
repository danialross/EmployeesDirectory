import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Add from "../components/Add";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import axios from "axios";
import Missing from "../components/Missing";

//styling
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
`;

function Home({ routes, currRoute }) {
  //for showing the display
  const [db, setDb] = useState([]);

  const searchDatabase = (currRoute, input) => {
    if (currRoute === "") {
      axios
        .get("http://localhost:3001/api/employees/" + currRoute + input)
        .then((response) => {
          console.log("search result : " + response.data);
          setDb(response.data);
        })
        .catch((error) => console.error("Error:", error));
    } else if (currRoute === "/executives") {
      axios
        .get("http://localhost:3001/api/search/" + currRoute + input)
        .then((response) => {
          console.log("search result : " + response.data);
          setDb(response.data);
        })
        .catch((error) => console.error("Error:", error));
    } else if (currRoute === "/mids") {
      axios
        .get("http://localhost:3001/api/search/" + currRoute + input)
        .then((response) => {
          console.log("search result : " + response.data);
          setDb(response.data);
        })
        .catch((error) => console.error("Error:", error));
    } else if (currRoute === "/juniors") {
      axios
        .get("http://localhost:3001/api/search/" + currRoute + input)
        .then((response) => {
          console.log("search result : " + response.data);
          setDb(response.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  useEffect(() => {
    searchDatabase();
  }, []);

  return (
    <>
      <TopBar
        routes={routes}
        searchDatabase={searchDatabase}
        currRoute={currRoute}
      />
      <StyledDiv>
        {db.length !== 0 ? (
          db.map((person) => {
            return (
              <Profile
                key={person._id}
                person={person}
                searchDatabase={searchDatabase}
              />
            );
          })
        ) : (
          <Missing />
        )}
      </StyledDiv>
      <StyledDiv>
        <Add searchDatabase={searchDatabase} />
      </StyledDiv>
    </>
  );
}

export default Home;
