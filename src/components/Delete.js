import Button from "react-bootstrap/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 5rem;
`;

function Delete({ handleDelete, index }) {
  return (
    <StyledButton onClick={() => handleDelete(index)} variant="outline-danger">
      Delete
    </StyledButton>
  );
}

export default Delete;
