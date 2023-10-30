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
        <Card.Title>No Employee Found.</Card.Title>
        <Card.Text>No Employee matches the name or title.</Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default Missing;
