import styled from "styled-components";
import { colors } from "../../theme/theme";



export const HeaderContainer = styled.header`
  width: 100%; 
  height: 6.3rem; 
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5.5rem 0 4.06rem; 

  @media screen and (max-width: 37.5rem) { 
    padding: 0 1.25rem; 
  }
`;

export const LogoWrapper = styled.div`
  span:first-child {
    color: ${colors.white};
    font-weight: 600;
    font-size: 2.5rem; 
    margin-right: 0.5rem; 
    display: inline-block;
  }

  span:last-child {
    color: ${colors.white};
    font-weight: 300;
    font-size: 1.25rem; 
  }

  @media screen and (max-width: 37.5rem) {
    span:first-child {
      font-size: 1.9rem; 
    }

    span:last-child {
      font-size: 1rem; 
    }
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.5rem; 
  line-height: 1.9rem;
  color: ${colors.white};
`;
