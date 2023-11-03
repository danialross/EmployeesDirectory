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
    if (currRoute === "/") {
      axios

        .get("http://localhost:3001/api/employees")
        .then((response) => {
          console.log("search result : " + response.data);
          setDb(response.data);
        })
        .catch((error) => console.error("Error:", error));
    } else {
      axios
        .get("http://localhost:3001/api/search" + currRoute + "/" + input)
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
                currRoute={currRoute}
              />
            );
          })
        ) : (
          <Missing />
        )}
      </StyledDiv>
      <StyledDiv>
        <Add searchDatabase={searchDatabase} currRoute={currRoute} />
      </StyledDiv>
    </>
  );
}

export default Home;
