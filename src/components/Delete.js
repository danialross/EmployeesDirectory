import Button from "react-bootstrap/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 5rem;
`;

function Delete({ handleDelete, _id }) {
  return (
    <StyledButton onClick={() => handleDelete(_id)} variant="outline-danger">
      Delete
    </StyledButton>
  );
}

export default Delete;
