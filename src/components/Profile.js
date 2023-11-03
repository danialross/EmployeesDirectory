import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 18rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  margin: 0.5rem;
`;

const StyledImage = styled(Card.Img)`
  border-radius: 100000px;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  text-align: center;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
`;

function Profile({ person, searchDatabase, currRoute }) {
  const { name, title, img, _id } = person;

  return (
    <StyledCard>
      <StyledImage variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{title}</Card.Text>
        <StyledDiv>
          <Edit
            person={person}
            searchDatabase={searchDatabase}
            currRoute={currRoute}
          />
          <Delete
            _id={_id}
            searchDatabase={searchDatabase}
            currRoute={currRoute}
          />
        </StyledDiv>
      </Card.Body>
    </StyledCard>
  );
}

export default Profile;
