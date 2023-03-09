import styled from "styled-components";
import { Colors } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.2rem;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  margin-bottom: 0.2rem;
`;

export const Subtitle = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: gray;
  text-transform: capitalize;
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${Colors.LIGHT_BLUE};
  color: ${Colors.DARK_PURPLE};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
`;