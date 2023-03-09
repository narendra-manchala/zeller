import styled from "styled-components";
import { Colors } from "../../styles";

export const Wrapper = styled.div<{selected: boolean}>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.selected ? Colors.LIGHT_BLUE : 'transparent'};
  border-radius: 0.4rem;
`;

export const Label = styled.label<{ disabled?: boolean; }>`
   font-size: 1rem;
   font-weight: 300;
   color: black;
`;

export const Radio = styled.input`
   -webkit-appearance: none;
   appearance: none;
   margin: 0;
   width: 1.5em;
   height: 1.5em;
   border: 2px solid ${Colors.DARK_PURPLE};
   border-radius: 50%;
   ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 0.75em;
      height: 0.75em;
      margin: 3px;
   }
   :hover {
    ::after {
       background-color: ${Colors.DARK_PURPLE_FADED}
    }
 }
 :checked {
    ::after {
       background-color: ${Colors.DARK_PURPLE};
    }
    :hover {
       background-color: ${Colors.WHITE};
       border: 2px solid ${Colors.DARK_PURPLE};
       ::after {
          background-color: ${Colors.DARK_PURPLE}
       }
    }
 }
`;