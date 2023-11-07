import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import Add from "../components/Add";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import axios from "axios";
import Missing from "../components/Missing";
import { Button } from "react-bootstrap";

//styling
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  margin-top: -0.5rem;
  width: 11rem;
  height: 3rem;
`;
const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function DirectoryPage({ routes, currRoute }) {
  //for showing the display
  const [db, setDb] = useState([]);

  const searchDatabase = (currRoute, input) => {
    try {
      if (currRoute === "/") {
        if (input === "") {
          axios
            .get("http://localhost:3001/api/employees")
            .then((response) => {
              setDb(response.data);
            })
            .catch((error) => console.error("Error:", error));
        } else {
          axios
            .get("http://localhost:3001/api/employees/" + input)
            .then((response) => {
              setDb(response.data);
            })
            .catch((error) => console.error("Error:", error));
        }
      } else if (
        currRoute === "/executive" ||
        currRoute === "/mid" ||
        currRoute === "/junior"
      ) {
        if (input.length === 0) {
          axios
            .get("http://localhost:3001/api/search" + currRoute)
            .then((response) => {
              console.log("http://localhost:3001/api/search" + currRoute);
              setDb(response.data);
            })
            .catch((error) => console.error("Error:", error));
        } else {
          axios
            .get("http://localhost:3001/api/search" + currRoute + "/" + input)
            .then((response) => {
              console.log(
                "http://localhost:3001/api/search" + currRoute + "/" + input
              );
              setDb(response.data);
            })
            .catch((error) => console.error("Error:", error));
        }
      }
    } catch (e) {
      console.error("error : " + e);
    }
  };

  useEffect(() => {
    searchDatabase("/", "");
  }, []);

  return (
    <>
      <TopBar
        routes={routes}
        searchDatabase={searchDatabase}
        currRoute={currRoute}
      />
      <StyledDiv>
        <Add searchDatabase={searchDatabase} currRoute={currRoute} />
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
        <StyledButton variant="primary" onClick={handleClick}>
          Back to Top
        </StyledButton>
      </StyledDiv>
    </>
  );
}

export default DirectoryPage;
