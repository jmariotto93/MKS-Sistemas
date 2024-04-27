import styled from "styled-components";
import { colors } from "../../theme/theme";

export const CartContainer = styled.div`
  width: 486px; 
  height: 100vh;
  background-color: ${colors.primary};
  box-shadow: 12px 1px 10px 16px  rgba(0, 0, 0, 0.3);

  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  .container-title-cart{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 36px;
  }

  .icon-close-cart{
    width: 38px;
    height: auto;
    border-radius: 25px;
    font-size: 38;
    background: ${colors.white};
  }

  @media screen and (max-width: 485px) {
    width: 330px;
  }
  
`;  

export const TitleCart = styled.h1`
    width: 166px;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    color: ${colors.white};
  
`;




