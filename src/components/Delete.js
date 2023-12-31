import Button from "react-bootstrap/Button";
import styled from "styled-components";
import axios from "axios";

const StyledButton = styled(Button)`
  width: 5rem;
`;

function Delete({ _id, searchDatabase, currRoute }) {
  const sendDeleteRequest = () => {
    axios
      .delete("http://localhost:3001/api/employees/" + _id)
      .then(() => {
        console.log("User " + _id + "has been deleted");
        searchDatabase(currRoute, "");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <StyledButton onClick={sendDeleteRequest} variant="outline-danger">
      Delete
    </StyledButton>
  );
}

export default Delete;
