import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #0872fc;
  width: auto;
  height: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 4rem;
  color: white;
  padding-top: 3rem;
  font-family:
    Varela Round,
    sans-serif;
`;

const Banner = () => {
  return (
    <StyledDiv>
      <b>Employees</b>
    </StyledDiv>
  );
};

export default Banner;
