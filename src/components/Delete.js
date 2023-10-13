import Button from "react-bootstrap/Button";
import styled from "styled-components";

function Delete({ handleDelete, index }) {
  const StyledButton = styled(Button)`
    width: 5rem;
  `;

  return (
    <StyledButton onClick={() => handleDelete(index)} variant="outline-danger">
      Delete
    </StyledButton>
  );
}

export default Delete;
