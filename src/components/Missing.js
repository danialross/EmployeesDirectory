import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 18rem;
  margin-top: 1rem;
`;

function Missing() {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>No Employees Found.</Card.Title>
        <Card.Text>No employees matches that name or title.</Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default Missing;
