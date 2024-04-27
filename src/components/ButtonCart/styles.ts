import styled from "styled-components";
import { colors } from "../../theme/theme";

export const ButtonCartContainer = styled.button`
  width: 5.6rem;
  height: 2.8rem; 
  border-radius: 0.5rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; 
  border: none;
  transition: background-color 0.4s ease;
  position: relative;

  .icon-cart {
      font-size: 1.19rem; 
    }

    span {
      font-weight: 700;
      font-size: 1.1rem; 
    }

    &:hover {
        background-color: ${colors.secondary};
        color: ${colors.white};
        border-radius: 0.25rem; 
    }

    @media screen and (max-width: 600px) {
        width: 4.7rem; 
        height: 2.8rem;
    }
`;
