import styled from "styled-components";

export enum Colors {
  WHITE = "#FFF",
  PURPLE = "#CDC3DE",
  DARK_PURPLE = "#0171ce",
  LIGHT_BLUE = "#e8f2fb",
  DARK_PURPLE_FADED = "#7B6798",
};

export const Divider = styled.hr`
  border: 0.07rem solid ${Colors.LIGHT_BLUE};
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  margin-bottom: 2rem;
`;

